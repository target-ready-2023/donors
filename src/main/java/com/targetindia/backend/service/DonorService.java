package com.targetindia.backend.service;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.entity.DonorProfile;

public interface DonorService {
    public DonorProfile saveDonor(DonorProfile donor);

    public DonorDetailsDTO findDonorByEmail(String donorEmail);
}
