package com.targetindia.backend.service;

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
        transactions.add(donorTransaction);
        donorProfile = new DonorProfile("DN-0001",
                "Srilaxmi Jaina",
                "Hyderabad, Telangana",
                dateFormat.parse(DoB),
                "srilaxmijaina.01@gmail.com",
                "1234567890",
                transactions);
    }

    @AfterEach
    void tearDown() {
        donorTransaction = null;
        donorProfile = null;
        donorRepository.deleteAll();
    }

//    @Test
//    void testSaveTransaction(){
//        when(transactionService.generateTransactionId()).thenReturn(donorTransaction.getTransactionId());
//        when(transactionService.generateInvoiceId(0)).thenReturn(donorTransaction.getInvoiceId());
//        when(transactionService.generateFiscalYear(any(Date.class))).thenReturn(donorTransaction.getFiscalYear());
//        DonorTransactions response = transactionService.saveTransaction(donorTransaction, donorProfile.getDonorEmail());
//        assertEquals(donorTransaction.getInvoiceId(), response.getInvoiceId());
//        assertEquals("FY2023-2024", response.getFiscalYear());
//        assertNotNull(response);
//    }

    @Test
    void testGenerateTransactionDetails(){
        DonorTransactions response = transactionService.generateTransactionDetails(donorTransaction, 0);
        assertEquals(donorTransaction.getInvoiceId(), response.getInvoiceId());
        assertTrue(response.getTransactionId().matches("^TXN-[A-F0-9]{8}$"));
        assertEquals(donorTransaction.getFiscalYear(), response.getFiscalYear());
        assertNotNull(response);
    }

    @Test
    void testGetAllTransactions(){
        List<DonorTransactions> transactions = new ArrayList<>();
        transactions.add(donorTransaction);
        when(transactionRepository.findAll()).thenReturn(transactions);
        List<DonorTransactions> response = transactionService.getAllTransactions();
        assertEquals(transactions, response);
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
