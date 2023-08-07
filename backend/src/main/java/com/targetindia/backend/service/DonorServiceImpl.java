package com.targetindia.backend.service;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class DonorServiceImpl implements DonorService{
    @Autowired
    private DonorRepository donorRepository;

//    Method to save the Donor Details
    @Override
    public DonorProfile saveDonor(DonorProfile donor) {
        donor.setDonorID(generateDonorId());
//        List<DonorTransactions> transactions = donor.getTransactions();
//        for(DonorTransactions trans : transactions){
//            trans = transactionService.generateTransactionDetails(trans);
//        }
        return donorRepository.save(donor);
    }

//    Method to generate a unique DonorId for every donor
    private String generateDonorId() {
        Long nextDonorId = donorRepository.count() + 1 ;
        String formattedNumericValue = String.format("%04d", nextDonorId);
        return "DN-" + formattedNumericValue;
    }

//    Method to get the donor details(donor_name, donor_address, donor_pan, donor_id)
    @Override
    public DonorDetailsDTO findDonorByEmail(String donorEmail) {
        return donorRepository.findDonorDetailsByEmail(donorEmail);
    }

//    Method to get the donorDetails by searching with email
    @Override
    public DonorProfile findDonorDetailsByEmail(String donorEmail) {
        DonorProfile donor = donorRepository.findDonorByEmail(donorEmail);
        return donor;
    }

    @Override
    @Transactional
    public DonorProfile addTransactionToDonorProfile(String email, DonorTransactions transaction) {
        DonorProfile donorProfile = findDonorDetailsByEmail(email);
        donorProfile.getTransactions().add(transaction);
        return donorRepository.save(donorProfile);
    }

}
