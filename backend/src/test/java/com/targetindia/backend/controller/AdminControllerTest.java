package com.targetindia.backend.controller;

import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import com.targetindia.backend.repository.TransactionRepository;
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
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class AdminControllerTest {
    @Mock
    private DonorRepository donorRepository;
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
        transactions.add(donorTransaction);
        donorProfile = new DonorProfile("DN-0001",
                "Srilaxmi Jaina",
                "Hyderabad, Telangana",
                dateFormat.parse(DoB),
                100000L,
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
    void testGetAllDonors_Success() {
        List<DonorProfile> donors = new ArrayList<>();
        donors.add(donorProfile);
        when(donorRepository.findAll()).thenReturn(donors);
        ResponseEntity<?> response = adminController.getAllDonors();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(donors, response.getBody());
        verify(donorRepository, times(1)).findAll();
    }

    @Test
    void testGetAllDonors_NoContent(){
        List<DonorProfile> donors = new ArrayList<>();
        when(donorRepository.findAll()).thenReturn(donors);
        ResponseEntity<?> response = adminController.getAllDonors();
//        verify(donorController, times(1)).getAllDonors();
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }

    @Test
    void testGetAllDonors_InternalServerError() {
        when(adminController.getAllDonors()).thenThrow(HttpServerErrorException.class);
        ResponseEntity<?> response = adminController.getAllDonors();
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals("Failed to get all donors", response.getBody());
    }

}
