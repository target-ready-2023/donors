package com.targetindia.backend.service;

import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.Calendar;
import java.util.Date;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private DonorService donorService;

    TransactionServiceImpl(TransactionRepository transactionRepository, DonorService donorService){
        this.transactionRepository = transactionRepository;
        this.donorService = donorService;
    }

//   Method to save the transaction details to database in DonorTransactions Table
    @Override
    public DonorTransactions saveTransaction(DonorTransactions transactionDetails, String email) {
        transactionDetails.setTransactionId(generateTransactionId());
        transactionDetails.setInvoiceId(generateInvoiceId(0));
        transactionDetails.setFiscalYear(generateFiscalYear(transactionDetails.getTransactionDate()));
        return transactionDetails;
    }

    @Override
    public DonorTransactions generateTransactionDetails(DonorTransactions transactionDetails, int value) {
        transactionDetails.setTransactionId(generateTransactionId());
        transactionDetails.setInvoiceId(generateInvoiceId(value));
        transactionDetails.setFiscalYear(generateFiscalYear(transactionDetails.getTransactionDate()));
        return transactionDetails;
    }

//    Method to generate unique Invoice ID for every transaction
    private String generateInvoiceId(int value) {
        Long nextInvoiceId = transactionRepository.count() + 1 + value ;
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

        return "FY" + year + "-" + nextYear;
    }
}
