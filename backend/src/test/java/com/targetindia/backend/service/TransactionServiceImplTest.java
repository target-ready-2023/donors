package com.targetindia.backend.service;

import com.targetindia.backend.dto.DonorTransactionsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import com.targetindia.backend.repository.TransactionRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

public class TransactionServiceImplTest {
    @InjectMocks
    private TransactionServiceImpl transactionService;
    @Mock
    private DonorRepository donorRepository;
    @Mock
    private TransactionRepository transactionRepository;
    DonorTransactions donorTransaction;
    DonorProfile donorProfile;

    @BeforeEach
    void setUp() throws ParseException {
        MockitoAnnotations.openMocks(this);
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
        String DoB = "03-12-2001";
        String transactionDate = "03-08-2023";
        List<DonorTransactions> transactions = new ArrayList<>();
        donorTransaction = new DonorTransactions("DSF-I000001",
                10000L,
                "IMPS",
                dateFormat.parse(transactionDate),
                "TXN-12345678",
                "FY2023-2024");

        donorProfile = new DonorProfile("DN-0001",
                "Srilaxmi Jaina",
                "Hyderabad, Telangana",
                dateFormat.parse(DoB),
                10000L,
                "srilaxmijaina.01@gmail.com",
                "1234567890",
                transactions);
        donorTransaction.setDonorProfile(donorProfile);
        transactions.add(donorTransaction);
        donorProfile.getTransactions().add(donorTransaction);
    }

    @AfterEach
    void tearDown() {
        donorTransaction = null;
        donorProfile = null;
    }

    @Test
    void testGenerateTransactionDetails(){
        DonorTransactions response = transactionService.generateTransactionDetails(donorTransaction, 0);
        assertEquals(donorTransaction.getInvoiceId(), response.getInvoiceId());
        assertTrue(response.getTransactionId().matches("^TXN-[A-F0-9]{8}$"));
        assertEquals(donorTransaction.getFiscalYear(), response.getFiscalYear());
        assertNotNull(response);
    }

    @Test
    void testGetAllTransactionsWithDonorInfo(){
        List<DonorTransactions> transactions = new ArrayList<>();
        transactions.add(donorTransaction);
        when(transactionRepository.findAll()).thenReturn(transactions);
        List<DonorTransactionsDTO> donorTransactionsDTOS = new ArrayList<>();
        DonorTransactionsDTO donor = new DonorTransactionsDTO();
        donor.setDonorEmail(donorProfile.getDonorEmail());
        donor.setDonorID(donorProfile.getDonorID());
        donor.setDonorName(donorProfile.getDonorName());
        donor.setTransactionId(donorTransaction.getTransactionId());
        donor.setAmount(donorTransaction.getAmount());
        donor.setTransactionDate(donorTransaction.getTransactionDate());
        donor.setFiscalYear(donorTransaction.getFiscalYear());
        donor.setInvoiceId(donorTransaction.getInvoiceId());
        donor.setTransactionMode(donorTransaction.getTransactionMode());
        donorTransactionsDTOS.add(donor);
        List<DonorTransactionsDTO> response = transactionService.getAllTransactionsWithDonorInfo();
        assertEquals(donorTransactionsDTOS, response);
    }


    @Test
    void testGetTransactionsByDonorEmail(){
        List<DonorTransactions> transactions = new ArrayList<>();
        transactions.add(donorTransaction);
        when(transactionRepository.findByDonorProfileDonorEmail(anyString())).thenReturn(transactions);
        List<DonorTransactionsDTO> donorTransactionsDTOS = new ArrayList<>();
        DonorTransactionsDTO donor = new DonorTransactionsDTO();
        donor.setDonorEmail(donorProfile.getDonorEmail());
        donor.setDonorID(donorProfile.getDonorID());
        donor.setDonorName(donorProfile.getDonorName());
        donor.setTransactionId(donorTransaction.getTransactionId());
        donor.setAmount(donorTransaction.getAmount());
        donor.setTransactionDate(donorTransaction.getTransactionDate());
        donor.setFiscalYear(donorTransaction.getFiscalYear());
        donor.setInvoiceId(donorTransaction.getInvoiceId());
        donor.setTransactionMode(donorTransaction.getTransactionMode());
        donorTransactionsDTOS.add(donor);
        List<DonorTransactionsDTO> response = transactionService.getTransactionsByDonorEmail(donorProfile.getDonorEmail());
        assertEquals(donorTransactionsDTOS, response);
    }

    @Test
    void testGenerateInvoiceId(){
        when(transactionRepository.count()).thenReturn(100L);
        String invoiceId = transactionService.generateInvoiceId(0);
        String expectedInvoiceId = "DSF-I000101";
        assertEquals(expectedInvoiceId, invoiceId);
    }

    @Test
    void testGenerateTransactionId() {
        String transactionId = transactionService.generateTransactionId();
        assertTrue(transactionId.matches("^TXN-[A-F0-9]{8}$")); // The regex checks if the transactionId matches the format "TXN-" followed by 8 hexadecimal characters.
    }

    @Test
    void testGenerateFiscalYear() throws ParseException {
        String fiscalYear = transactionService.generateFiscalYear(donorTransaction.getTransactionDate());
        String expectedFiscalYear = donorTransaction.getFiscalYear();
        assertEquals(expectedFiscalYear, fiscalYear);
    }
}
