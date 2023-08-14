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
        List<DonorProfileDTO> donorDTOs = donorService.getAllDonors();
        if(donorDTOs.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.ok(donorDTOs);
        }
    }
    @GetMapping("/getAllTransactions")
    public ResponseEntity<List<DonorTransactionsDTO>> getAllTransactionsWithDonorInfo(){
        List<DonorTransactionsDTO> AllTransactions = transactionService.getAllTransactionsWithDonorInfo();
        if(AllTransactions.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.ok(AllTransactions);
        }
    }

    @GetMapping("/getTransactionsWithEmail")
    public ResponseEntity<List<DonorTransactionsDTO>> getTransactionsWithEmail(@RequestParam String donorEmail){
        List<DonorTransactionsDTO> AllTransactions = transactionService.getTransactionsByDonorEmail(donorEmail);
        if(AllTransactions.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        else{
            return ResponseEntity.ok(AllTransactions);
        }
    }
}
