package com.targetindia.backend.service;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.dto.DonorProfileDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.repository.DonorRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class DonorServiceImpl implements DonorService{
    @Autowired
    private DonorRepository donorRepository;

//    Method to save the Donor Details
    @Override
    public DonorProfile saveDonor(DonorProfile donor) {
        donor.setDonorID(generateDonorId());
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
        return donorRepository.findDonorByEmail(donorEmail);
    }

    @Override
    @Transactional
    public DonorProfile addTransactionToDonorProfile(String email, DonorTransactions transaction) {
        DonorProfile donorProfile = findDonorDetailsByEmail(email);
        donorProfile.setDonorAmount(donorProfile.getDonorAmount() + transaction.getAmount());
        donorProfile.getTransactions().add(transaction);
        return donorRepository.save(donorProfile);
    }

    @Override
    public List<DonorProfileDTO> getAllDonors(){
        List<DonorProfile> donors = donorRepository.findAll();
        List<DonorProfileDTO> donorDTOs = new ArrayList<>();
        for (DonorProfile donor : donors) {
            DonorProfileDTO donorDTO = new DonorProfileDTO();
            donorDTO.setDonorID(donor.getDonorID());
            donorDTO.setDonorName(donor.getDonorName());
            donorDTO.setDonorAddress(donor.getDonorAddress());
            donorDTO.setDateOfBirth(donor.getDateOfBirth());
            donorDTO.setDonorAmount(donor.getDonorAmount());
            donorDTO.setDonorEmail(donor.getDonorEmail());
            donorDTO.setDonorPan(donor.getDonorPan());
            donorDTOs.add(donorDTO);
        }
        return donorDTOs;
    }

}
