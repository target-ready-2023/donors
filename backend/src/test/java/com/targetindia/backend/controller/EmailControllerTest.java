package com.targetindia.backend.controller;

import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import com.targetindia.backend.repository.TransactionRepository;
import com.targetindia.backend.service.DonorService;
import com.targetindia.backend.service.EmailService;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import jakarta.mail.MessagingException;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

public class EmailControllerTest {
    @Mock
    private DonorService donorService;
    @Mock
    private EmailService emailService;
    DonorTransactions donorTransaction;
    DonorProfile donorProfile;
    @InjectMocks
    private EmailController emailController;

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
        donorService.saveDonor(donorProfile);
    }

    @AfterEach
    void tearDown() {
    }


    @Test
    public void testGenerateEmailWithAttachment_Success() throws Exception {
        when(donorService.findDonorDetailsByEmail(donorProfile.getDonorEmail())).thenReturn(donorProfile);
        doNothing().when(emailService).sendMailWithAttachment(anyString(), anyString(), anyString(), anyString(), any(byte[].class));
        ResponseEntity<String> response = emailController.generateEmailWithAttachment(donorProfile.getDonorEmail(), "FY2023-2024");
        verify(donorService).findDonorDetailsByEmail(donorProfile.getDonorEmail());
        verify(emailService).sendMailWithAttachment(anyString(), anyString(), anyString(), anyString(), any(byte[].class));
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Email with PDF attachment sent successfully!", response.getBody());
    }

    @Test
    public void testGenerateEmailWithAttachment_DonorNotFound() throws Exception {
        String donorEmail = "JainaSriLaxmi_NotFound@gmail.com";
        String fiscalYear = "FY2023-2024";
        when(donorService.findDonorDetailsByEmail(donorEmail)).thenReturn(null);
        ResponseEntity<String> response = emailController.generateEmailWithAttachment(donorEmail, fiscalYear);
        verify(donorService).findDonorDetailsByEmail(donorEmail);
        verify(emailService, never()).sendMailWithAttachment(anyString(), anyString(), anyString(), anyString(), any(byte[].class));
        assertEquals(404, response.getStatusCodeValue());
    }

    @Test
    public void testGenerateEmailWithAttachment_Exception() throws Exception {
        String donorEmail = "srilaxmijaina.01@gmail.com";
        String fiscalYear = "FY2023-2024";
        when(donorService.findDonorDetailsByEmail(donorEmail)).thenReturn(donorProfile);
        doThrow(new MessagingException("Failed to send email")).when(emailService).sendMailWithAttachment(anyString(), anyString(), anyString(), anyString(), any(byte[].class));
        ResponseEntity<String> response = emailController.generateEmailWithAttachment(donorEmail, fiscalYear);
        verify(donorService).findDonorDetailsByEmail(donorEmail);
        verify(emailService).sendMailWithAttachment(anyString(), anyString(), anyString(), anyString(), any(byte[].class));
        assertEquals(500, response.getStatusCodeValue());
        assertEquals("Failed to send email with PDF attachment.", response.getBody());
    }



}