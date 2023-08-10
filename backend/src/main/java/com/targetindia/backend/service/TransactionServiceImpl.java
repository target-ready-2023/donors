package com.targetindia.backend.service;

import com.targetindia.backend.dto.DonorTransactionsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import com.targetindia.backend.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TransactionServiceImpl implements TransactionService{

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private DonorRepository donorRepository;
    @Autowired
    private DonorService donorService;

    TransactionServiceImpl(TransactionRepository transactionRepository, DonorService donorService, DonorRepository donorRepository){
        this.transactionRepository = transactionRepository;
        this.donorRepository = donorRepository;
        this.donorService = donorService;
    }

//   Method to save the transaction details to database in DonorTransactions Table
//    @Override
//    public DonorTransactions saveTransaction(DonorTransactions transactionDetails, String email) {
//        transactionDetails.setTransactionId(generateTransactionId());
//        transactionDetails.setInvoiceId(generateInvoiceId(0));
//        transactionDetails.setFiscalYear(generateFiscalYear(transactionDetails.getTransactionDate()));
//        return transactionDetails;
//    }

// Method to generate Transaction details
    @Override
    public DonorTransactions generateTransactionDetails(DonorTransactions transactionDetails, int value) {
        transactionDetails.setTransactionId(generateTransactionId());
        transactionDetails.setInvoiceId(generateInvoiceId(value));
        transactionDetails.setFiscalYear(generateFiscalYear(transactionDetails.getTransactionDate()));
        return transactionDetails;
    }

//    Method to get all the transactions
    @Override
    public List<DonorTransactionsDTO> getAllTransactionsWithDonorInfo(){
        List<DonorTransactionsDTO> AllTransactions = new ArrayList<>();
        List<DonorTransactions> transactions = transactionRepository.findAll();
        for (DonorTransactions transaction : transactions) {
            DonorTransactionsDTO donorTransactionsDTO = new DonorTransactionsDTO();
            donorTransactionsDTO.setDonorID(transaction.getDonorProfile().getDonorID());
            donorTransactionsDTO.setDonorName(transaction.getDonorProfile().getDonorName());
            donorTransactionsDTO.setDonorEmail(transaction.getDonorProfile().getDonorEmail());
            donorTransactionsDTO.setInvoiceId(transaction.getInvoiceId());
            donorTransactionsDTO.setAmount(transaction.getAmount());
            donorTransactionsDTO.setTransactionMode(transaction.getTransactionMode());
            donorTransactionsDTO.setTransactionDate(transaction.getTransactionDate());
            donorTransactionsDTO.setTransactionId(transaction.getTransactionId());
            donorTransactionsDTO.setFiscalYear(transaction.getFiscalYear());
            AllTransactions.add(donorTransactionsDTO);
        }
        return AllTransactions;
    }

    @Override
    public List<DonorTransactionsDTO> getTransactionsByDonorEmail(String donorEmail) {
        List<DonorTransactions> transactions = transactionRepository.findByDonorProfileDonorEmail(donorEmail);
        List<DonorTransactionsDTO> AllTransactions = new ArrayList<>();

        for (DonorTransactions transaction : transactions) {
            DonorTransactionsDTO donorTransactionsDTO = new DonorTransactionsDTO();
            donorTransactionsDTO.setDonorID(transaction.getDonorProfile().getDonorID());
            donorTransactionsDTO.setDonorName(transaction.getDonorProfile().getDonorName());
            donorTransactionsDTO.setDonorEmail(transaction.getDonorProfile().getDonorEmail());
            donorTransactionsDTO.setInvoiceId(transaction.getInvoiceId());
            donorTransactionsDTO.setAmount(transaction.getAmount());
            donorTransactionsDTO.setTransactionMode(transaction.getTransactionMode());
            donorTransactionsDTO.setTransactionDate(transaction.getTransactionDate());
            donorTransactionsDTO.setTransactionId(transaction.getTransactionId());
            donorTransactionsDTO.setFiscalYear(transaction.getFiscalYear());
            AllTransactions.add(donorTransactionsDTO);
        }

        return AllTransactions;
    }

//    Method to generate unique Invoice ID for every transaction
    protected String generateInvoiceId(int value) {
        Long nextInvoiceId = transactionRepository.count() + 1 + value ;
        String formattedNumericValue = String.format("%06d", nextInvoiceId);
        return "DSF-I" + formattedNumericValue;
    }

//    Method to generate unique Transaction ID for every Transaction
    protected String generateTransactionId() {
        String nextTransactionId = "00000000";
        UUID uuid = UUID.randomUUID();
        String uuidString = uuid.toString().replace("-", "").toUpperCase();
        nextTransactionId = "TXN-" + uuidString.substring(0, 8);
        return nextTransactionId;
    }

//    Method to generate the Fiscal year from the Transaction date
    protected String generateFiscalYear(Date date){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(date);

        int year = calendar.get(Calendar.YEAR);
        int nextYear = year + 1;

        return "FY" + year + "-" + nextYear;
    }
}
