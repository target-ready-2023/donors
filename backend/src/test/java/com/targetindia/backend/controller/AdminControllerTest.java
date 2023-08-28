package com.targetindia.backend.controller;

import com.targetindia.backend.dto.DonorProfileDTO;
import com.targetindia.backend.dto.DonorTransactionsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import com.targetindia.backend.service.DonorService;
import com.targetindia.backend.service.TransactionService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class AdminControllerTest {
    @Mock
    private DonorService donorService;
    @Mock
    private TransactionService transactionService;
    @InjectMocks
    private AdminController adminController;
    DonorTransactions donorTransaction;
    DonorProfile donorProfile;

    @BeforeEach
    void setUp() throws ParseException {
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
                100000L,
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
    void testGetAllDonors_Success() {
        List<DonorProfileDTO> donorProfileDTOS = new ArrayList<>();
        DonorProfileDTO donor = new DonorProfileDTO();
        donor.setDonorEmail(donorProfile.getDonorEmail());
        donor.setDonorID(donorProfile.getDonorID());
        donor.setDonorAmount(donorProfile.getDonorAmount());
        donor.setDonorName(donorProfile.getDonorName());
        donor.setDonorPan(donorProfile.getDonorPan());
        donor.setDonorAddress(donorProfile.getDonorAddress());
        donor.setDateOfBirth(donorProfile.getDateOfBirth());
        donorProfileDTOS.add(donor);
        when(donorService.getAllDonors()).thenReturn(donorProfileDTOS);
        ResponseEntity<?> response = adminController.getAllDonors();
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testGetAllDonors_No_Content() {
        List<DonorProfileDTO> donors = new ArrayList<>();
        when(donorService.getAllDonors()).thenReturn(donors);
        ResponseEntity<?> response = adminController.getAllDonors();
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }

    @Test
    void testGetAllTransactionsWithDonorInfo_Success(){
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
        when(transactionService.getAllTransactionsWithDonorInfo()).thenReturn(donorTransactionsDTOS);
        ResponseEntity<?> response = adminController.getAllTransactionsWithDonorInfo();
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testGetAllTransactionsWithDonorInfo_No_Content(){
        List<DonorTransactionsDTO> donorTransactionsDTOS = new ArrayList<>();
        when(transactionService.getAllTransactionsWithDonorInfo()).thenReturn(donorTransactionsDTOS);
        ResponseEntity<?> response = adminController.getAllTransactionsWithDonorInfo();
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }

    @Test
    void testGetTransactionsWithEmail_Success(){
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
        when(transactionService.getTransactionsByDonorEmail(donorProfile.getDonorEmail())).thenReturn(donorTransactionsDTOS);
        ResponseEntity<?> response = adminController.getTransactionsWithEmail(donorProfile.getDonorEmail());
        assertEquals(HttpStatus.OK, response.getStatusCode());
    }

    @Test
    void testGetTransactionsByDonorEmail_No_Content(){
        List<DonorTransactionsDTO> donorTransactionsDTOS = new ArrayList<>();
        when(transactionService.getTransactionsByDonorEmail(donorProfile.getDonorEmail())).thenReturn(donorTransactionsDTOS);
        ResponseEntity<?> response = adminController.getTransactionsWithEmail(donorProfile.getDonorEmail());
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }
}
