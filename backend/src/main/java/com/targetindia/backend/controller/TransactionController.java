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
@RequestMapping("/api/transaction")
public class TransactionController {
    @Autowired
    private final TransactionService transactionService;

    @Autowired
    private TransactionRepository transactionRepository;

    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    private static final Logger logger = LoggerFactory.getLogger(TransactionController.class);

//    API for getting all transactions from database
    @GetMapping("/getTransactions")
    public List<DonorTransactions> getAllTransactions(){
        return transactionRepository.findAll();
    }

}
