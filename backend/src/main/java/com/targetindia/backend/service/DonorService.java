package com.targetindia.backend.service;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.dto.DonorProfileDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;

import java.util.List;


public interface DonorService {
    public DonorProfile saveDonor(DonorProfile donor);

    public DonorDetailsDTO findDonorByEmail(String donorEmail);

    public DonorProfile findDonorDetailsByEmail(String email);

    public DonorProfile addTransactionToDonorProfile(String email, DonorTransactions transaction);

    public List<DonorProfileDTO> getAllDonors();
}
