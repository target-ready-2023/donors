package com.targetindia.backend.service;

import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;

public interface TransactionService {
    public DonorTransactions saveTransaction(DonorTransactions transactionDetails);
}
