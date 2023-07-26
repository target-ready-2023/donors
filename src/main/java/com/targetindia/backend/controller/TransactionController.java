package com.targetindia.backend.controller;

import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.TransactionRepository;
import com.targetindia.backend.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/transaction")
public class TransactionController {
    @Autowired
    private TransactionService transactionService;

    @Autowired
    private TransactionRepository transactionRepository;

    private static final Logger logger = LoggerFactory.getLogger(DonorController.class);


//    API for adding a Transaction to the database
    @PostMapping("/addTransaction")
    public String addTransaction(@RequestBody DonorTransactions transactionDetails){
        logger.info("Received transaction object: {}", transactionDetails);
        transactionService.saveTransaction(transactionDetails);
        return "New Transaction added!!";
    }

//    API for getting all transactions from database
    @GetMapping("/getTransactions")
    public List<DonorTransactions> getAllTransactions(){
        return transactionRepository.findAll();
    }

}