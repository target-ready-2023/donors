package com.targetindia.backend.repository;

import static org.mockito.Mockito.when;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.service.DonorServiceImpl;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@ExtendWith(MockitoExtension.class)
public class DonorRepositoryTest {

    DonorTransactions donorTransaction;
    DonorProfile donorProfile;
    @Mock
    private DonorRepository donorRepository;
    @InjectMocks
    private DonorServiceImpl donorService;

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
                10000L,
                "srilaxmijaina.01@gmail.com",
                "1234567890",
                transactions);
        donorRepository.save(donorProfile);
    }

    @AfterEach
    void tearDown() {
        donorProfile = null;
        donorRepository.deleteAll();
    }
    @Test
    public void testFindDonorDetailsByEmail() {
        when(donorRepository.findDonorDetailsByEmail(donorProfile.getDonorEmail())).thenReturn(new DonorDetailsDTO(
                donorProfile.getDonorName(),
                donorProfile.getDonorAddress(),
                donorProfile.getDonorPan(),
                donorProfile.getDonorID()
        ));
        DonorDetailsDTO result = donorRepository.findDonorDetailsByEmail(donorProfile.getDonorEmail());
        assertEquals(result.getDonorName(), donorProfile.getDonorName());
        assertEquals(result.getDonorAddress(), donorProfile.getDonorAddress());
        assertEquals(result.getDonorPan(), donorProfile.getDonorPan());
        assertEquals(result.getDonorID(), donorProfile.getDonorID());
    }

    @Test
    public void testFindDonorByEmail() {
        when(donorRepository.findDonorByEmail(donorProfile.getDonorEmail())).thenReturn(donorProfile);
        DonorProfile result = donorRepository.findDonorByEmail(donorProfile.getDonorEmail());
        assertEquals(result.getDonorName(), donorProfile.getDonorName());
        assertEquals(result.getDonorAddress(), donorProfile.getDonorAddress());
        assertEquals(result.getDonorPan(), donorProfile.getDonorPan());
        assertEquals(result.getDonorID(), donorProfile.getDonorID());
        assertEquals(result.getDonorEmail(), donorProfile.getDonorEmail());
    }
}