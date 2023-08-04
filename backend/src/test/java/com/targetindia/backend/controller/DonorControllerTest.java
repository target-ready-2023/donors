package com.targetindia.backend.controller;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.dto.TransactionDetailsDTO;
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
import org.springframework.web.client.HttpServerErrorException;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class DonorControllerTest {
    @Mock
    private DonorService donorService;
    @Mock
    private TransactionService transactionService;
    @Mock
    private DonorRepository donorRepository;
    @InjectMocks
    private DonorController donorController;
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

    @Test
    void testAddDonor_Created(){
        when(donorService.saveDonor(donorProfile)).thenReturn(donorProfile);
        ResponseEntity<String> response = donorController.addDonor(donorProfile);
        verify(donorService, times(1)).saveDonor(donorProfile);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertEquals("New Donor added!!", response.getBody());
    }

    @Test
    void testAddDonor_InternalServerError(){
        when(donorService.saveDonor(donorProfile)).thenThrow(HttpServerErrorException.class);
        ResponseEntity<String> response = donorController.addDonor(donorProfile);
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Failed to add a new Donor", response.getBody());
        // Verify interactions
        verify(donorService, times(1)).saveDonor(donorProfile);
    }

    @Test
    void testGetDonorByEmail_Found() {
        // Prepare test data
        DonorDetailsDTO donorDetailsDTO = new DonorDetailsDTO();
        donorDetailsDTO.setDonorName(donorProfile.getDonorName());
        donorDetailsDTO.setDonorAddress(donorProfile.getDonorAddress());
        donorDetailsDTO.setDonorPan(donorProfile.getDonorPan());
        when(donorService.findDonorByEmail(donorProfile.getDonorEmail())).thenReturn(donorDetailsDTO);
        // Perform the test
        ResponseEntity<?> response = donorController.getDonorByEmail(donorProfile.getDonorEmail());
        // Verify the interactions and assertions
        verify(donorService, times(1)).findDonorByEmail(donorProfile.getDonorEmail());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(donorDetailsDTO, response.getBody());
    }

    @Test
    void testGetDonorByEmail_NotFound() {
        String donorEmail = "JainaSrilaxmi_NotFound.01@gmail.com";
        when(donorService.findDonorByEmail(donorEmail)).thenReturn(null);
        ResponseEntity<?> response = donorController.getDonorByEmail(donorEmail);
        verify(donorService, times(1)).findDonorByEmail(donorEmail);
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testAddTransactionToDonorProfile_Success() throws ParseException {
        TransactionDetailsDTO transactionDTO = new TransactionDetailsDTO();
        transactionDTO.setTransactionDetails(donorTransaction);
        transactionDTO.setEmail(donorProfile.getDonorEmail());

        when(transactionService.generateTransactionDetails(any(DonorTransactions.class), anyInt())).thenReturn(donorTransaction);
        ResponseEntity<String> response = donorController.addTransactionToDonorProfile(transactionDTO);

        verify(transactionService, times(1)).generateTransactionDetails(any(DonorTransactions.class), anyInt());
        verify(donorService, times(1)).addTransactionToDonorProfile(anyString(), any(DonorTransactions.class));
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("Transaction added successfully.", response.getBody());
    }

    @Test
    void testAddTransactionToDonorProfile_DonorNotFound() throws Exception{
        when(transactionService.generateTransactionDetails(donorTransaction, 0)).thenThrow(IllegalArgumentException.class);
        ResponseEntity<String> response = donorController.addTransactionToDonorProfile(new TransactionDetailsDTO(donorTransaction, "JainaSrilaxmi_NotFound@gmail.com"));
        assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
        assertEquals("DonorProfile not found with email: JainaSrilaxmi_NotFound@gmail.com", response.getBody());
        verify(transactionService, times(1)).generateTransactionDetails(donorTransaction, 0);
        verify(donorService, never()).addTransactionToDonorProfile(anyString(), any(DonorTransactions.class));
    }

    @Test
    void testAddTransactionToDonorProfile_InternalServerError() throws Exception {
        String email = "JainaSrilaxmi_Error@gmail.com";
        when(transactionService.generateTransactionDetails(donorTransaction, 0)).thenThrow(HttpServerErrorException.class);
        ResponseEntity<String> response = donorController.addTransactionToDonorProfile(new TransactionDetailsDTO(donorTransaction, email));
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Failed to add transaction.", response.getBody());
        // Verify interactions
        verify(transactionService, times(1)).generateTransactionDetails(donorTransaction, 0);
        verify(donorService, never()).addTransactionToDonorProfile(anyString(), any(DonorTransactions.class));
    }

}