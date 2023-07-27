package com.targetindia.backend.repository;

import com.targetindia.backend.entity.DonorTransactions;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface TransactionRepository extends JpaRepository<DonorTransactions, String> {

//    Method to Check whther a given transaction ID already present in the repository
    boolean existsByTransactionId(String transactionId);

}
