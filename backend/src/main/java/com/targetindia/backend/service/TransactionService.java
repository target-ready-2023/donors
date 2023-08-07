package com.targetindia.backend.service;


import com.targetindia.backend.entity.DonorTransactions;

import java.util.List;

public interface TransactionService {

////    Method for saving a Transaction
//    public DonorTransactions saveTransaction(DonorTransactions transactionDetails, String email);

//    Method for generating the transaction Details like Invoice ID, transaction ID, Fiscal Year
    public DonorTransactions generateTransactionDetails(DonorTransactions transactionDetails, int value);

//    Method to get all the transaction details
    public List<DonorTransactions> getAllTransactions();
}
