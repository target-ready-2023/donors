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

import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(MockitoExtension.class)
public class TransactionControllerTest {
    @Mock
    private TransactionService transactionService;
    @Mock
    private TransactionRepository transactionRepository;
    @InjectMocks
    private TransactionController transactionController;
    DonorTransactions donorTransaction;

    @BeforeEach
    void setUp() throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
        String DoB = "03-12-2001";
        String transactionDate = "03-08-2023";

        donorTransaction = new DonorTransactions("DSF-I000001",
                10000L,
                "IMPS",
                dateFormat.parse(transactionDate),
                "TXN-12345678",
                "FY2023-2024");
    }

    @AfterEach
    void tearDown() {
        donorTransaction = null;
        transactionRepository.deleteAll();
    }

//    @Test
//    void testGetAllTransactions_Success(){
//        List<DonorTransactions> transactionList = new ArrayList<>();
//        when(transactionService.getAllTransactions()).thenReturn(transactionList);
//
//        ResponseEntity<List<DonorTransactions>> response = transactionController.getAllTransactions();
//        assertEquals(HttpStatus.OK, response.getStatusCode());
//        assertEquals(transactionList, response.getBody());
//    }
//
//    @Test
//    void testGetAllTransactions_InternalServerError(){
//        List<DonorTransactions> transactionList = new ArrayList<>();
//        when(transactionService.getAllTransactions()).thenThrow(HttpServerErrorException.InternalServerError.class);
//        ResponseEntity<List<DonorTransactions>> response = transactionController.getAllTransactions();
//        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
//        assertEquals(null, response.getBody());
//    }

}
