package com.targetindia.backend.service;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(MockitoExtension.class)
public class DonorServiceImplTest {
    @InjectMocks
    private DonorServiceImpl donorService;
    @Mock
    private DonorRepository donorRepository;

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
                1000L,
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
    void testSaveDonor(){
        when(donorRepository.save(any(DonorProfile.class))).thenReturn(donorProfile);

        DonorProfile donor = donorService.saveDonor(donorProfile);
        assertNotNull(donor);
        assertEquals(donorProfile.getDonorName(), donor.getDonorName());
        verify(donorRepository).save(donorProfile);
    }

    @Test
    void testFindDonorByEmail(){

        DonorDetailsDTO dto = new DonorDetailsDTO("Srilaxmi Jaina",
                "Hyderabad, Telangana",
                "1234567890",
                "DN-0001");
        when(donorRepository.findDonorDetailsByEmail(anyString())).thenReturn(dto);

        DonorDetailsDTO response = donorService.findDonorByEmail(donorProfile.getDonorEmail());
        assertNotNull(response);
        assertEquals(dto.getDonorID(), response.getDonorID());
    }

    @Test
    void testFindDonorDetailsByEmail(){
        when(donorRepository.findDonorByEmail(anyString())).thenReturn(donorProfile);
        DonorProfile response = donorService.findDonorDetailsByEmail(donorProfile.getDonorEmail());
        assertNotNull(response);
        assertEquals(donorProfile.getDonorID(), response.getDonorID());
    }

    @Test
    void testAddTransactionToDonorProfile(){
        when(donorRepository.save(any(DonorProfile.class))).thenReturn(donorProfile);
        when(donorService.findDonorDetailsByEmail(donorProfile.getDonorEmail())).thenReturn(donorProfile);
        DonorProfile result = donorService.addTransactionToDonorProfile(donorProfile.getDonorEmail(), donorProfile.getTransactions().get(0));
        verify(donorRepository).save(donorProfile);
        assertEquals(donorProfile, result);
    }
}
