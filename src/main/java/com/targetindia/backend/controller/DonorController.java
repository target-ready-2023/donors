package com.targetindia.backend.controller;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.dto.TransactionDetailsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import com.targetindia.backend.service.DonorService;
import com.targetindia.backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/donor")
public class DonorController {
    @Autowired
    private final DonorService donorService;

    @Autowired
    private final TransactionService transactionService;

    private static final Logger logger = LoggerFactory.getLogger(DonorController.class);

    @Autowired
    private DonorRepository donorRepository;

    @Autowired
    public DonorController(DonorService donorService, TransactionService transactionService) {
        this.donorService = donorService;
        this.transactionService = transactionService;
    }

//    API for adding donor details to database
    @PostMapping("/addDonor")
    public String addDonor(@RequestBody DonorProfile donor){
        int i = 0;
        logger.info("Received donor object: {}", donor);
        List<DonorTransactions> transactions = donor.getTransactions();
        for(DonorTransactions trans : transactions){
            trans = transactionService.generateTransactionDetails(trans, i);
            i++;
        }
        logger.info("Modified donor object: {}", donor);
        donorService.saveDonor(donor);
        return "New Donor added!!";
    }

//    API for finding a donor details(donor_id, donor_name, donor_address, donor_pan) by checking with email in database
    @GetMapping("/findByEmail")
    public ResponseEntity<?> getDonorByEmail(@RequestParam String donorEmail) {
        DonorDetailsDTO donor = donorService.findDonorByEmail(donorEmail);
        if (donor != null) {
            // The donor was found, return the required information (name, address, PAN).
            return ResponseEntity.ok(donor);
        } else {
            // The donor was not found, return a response with an appropriate status code.
            return ResponseEntity.notFound().build();
        }
    }

//    API to add a transaction to the donor table, (from the existing customer page)
    @PutMapping("/addTransaction")
    public ResponseEntity<String> addTransactionToDonorProfile(@RequestBody TransactionDetailsDTO transactionDTO) {
        DonorTransactions transactionDetails = transactionDTO.getTransactionDetails();
        String email = transactionDTO.getEmail();
        logger.info("Received transaction object: {}", transactionDetails);
        logger.info("Received additionalString: {}", email);

        try{
            transactionDetails = transactionService.saveTransaction(transactionDetails, email);
            donorService.addTransactionToDonorProfile(email, transactionDetails);

            return ResponseEntity.ok("Transaction added successfully.");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("DonorProfile not found with email: " + email);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add transaction.");
        }
    }

//    API for getting all the donors details from the database
    @GetMapping("/getAllDonors")
    public List<DonorProfile> getAllDonors(){
        return donorRepository.findAll();
    }
}
