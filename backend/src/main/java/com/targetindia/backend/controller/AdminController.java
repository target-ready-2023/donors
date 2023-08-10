package com.targetindia.backend.controller;

import com.targetindia.backend.dto.DonorProfileDTO;
import com.targetindia.backend.dto.DonorTransactionsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import com.targetindia.backend.service.DonorService;
import com.targetindia.backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private final DonorService donorService;

    @Autowired
    private final TransactionService transactionService;

    @Autowired
    private final DonorRepository donorRepository;

    @Autowired
    public AdminController(DonorService donorService, TransactionService transactionService, DonorRepository donorRepository) {
        this.donorService = donorService;
        this.transactionService = transactionService;
        this.donorRepository = donorRepository;
    }

    @GetMapping("/getAllDonors")
    public ResponseEntity<?> getAllDonors() {
        try {
            List<DonorProfile> donors = donorRepository.findAll();

            List<DonorProfileDTO> donorDTOs = new ArrayList<>();
            for (DonorProfile donor : donors) {
                DonorProfileDTO donorDTO = new DonorProfileDTO();
                donorDTO.setDonorID(donor.getDonorID());
                donorDTO.setDonorName(donor.getDonorName());
                donorDTO.setDonorAddress(donor.getDonorAddress());
                donorDTO.setDateOfBirth(donor.getDateOfBirth());
                donorDTO.setDonorAmount(donor.getDonorAmount());
                donorDTO.setDonorEmail(donor.getDonorEmail());
                donorDTO.setDonorPan(donor.getDonorPan());

                donorDTOs.add(donorDTO);
            }

            return donorDTOs.isEmpty() ?
                    ResponseEntity.noContent().build() :
                    ResponseEntity.ok(donorDTOs);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to get all donors");
        }
    }

    @GetMapping("/getAllTransactions")
    public ResponseEntity<List<DonorTransactionsDTO>> getAllTransactionsWithDonorInfo(){
        try{
            List<DonorTransactionsDTO> AllTransactions = transactionService.getAllTransactionsWithDonorInfo();
            return ResponseEntity.ok(AllTransactions);
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/getTransactionsWithEmail")
    public ResponseEntity<List<DonorTransactionsDTO>> getTransactionsWithEmail(@RequestParam String donorEmail){
        try{
            List<DonorTransactionsDTO> AllTransactions = transactionService.getTransactionsByDonorEmail(donorEmail);
            return ResponseEntity.ok(AllTransactions);
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }
}
