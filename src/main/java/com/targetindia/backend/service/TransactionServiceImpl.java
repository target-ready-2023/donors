package com.targetindia.backend.service;

import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.Calendar;
import java.util.Date;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    private TransactionRepository transactionRepository;

//   Method to save the transaction details to database in DonorTransactions Table
    @Override
    public DonorTransactions saveTransaction(DonorTransactions transactionDetails) {
        transactionDetails.setTransactionId(generateTransactionId());
        transactionDetails.setInvoiceId(generateInvoiceId());
        transactionDetails.setFiscalYear(generateFiscalYear(transactionDetails.getTransactionDate()));
        return transactionRepository.save(transactionDetails);
    }

//    Method to generate unique Invoice ID for every transaction
    private String generateInvoiceId() {
        Long nextInvoiceId = transactionRepository.count() + 1 ;
        String formattedNumericValue = String.format("%06d", nextInvoiceId);
        return "DSF-I" + formattedNumericValue;
    }

//    Method to generate unique Transaction ID for every Transaction
    private String generateTransactionId() {
        String nextTransactionId = "00000000";
        boolean isUnique = false;
        while (!isUnique) {
            UUID uuid = UUID.randomUUID();
            String uuidString = uuid.toString().replace("-", "").toUpperCase();
            nextTransactionId = "TXN-" + uuidString.substring(0, 8);
            if (!transactionRepository.existsByTransactionId(nextTransactionId)) {
                isUnique = true;
            }
        }
        return nextTransactionId;
    }

//    Method to generate the Fiscal year from the Transaction date
    private String generateFiscalYear(Date date){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        int year = calendar.get(Calendar.YEAR);
        int nextYear = year + 1;

        return year + "-" + nextYear;
    }
}
