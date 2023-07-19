package com.targetreadyteam6.GeneratingPdf.services;


import com.targetreadyteam6.GeneratingPdf.entity.DonorProfile;
import com.targetreadyteam6.GeneratingPdf.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DonorService {
    @Autowired
    private DonorRepository donorRepository;

    public List<DonorProfile>  findAllDonor() {
        return donorRepository.findAll();
    }


    public DonorProfile findPersonById(Integer id) {
        Optional<DonorProfile> optionalDonor = donorRepository.findById(id);
        return optionalDonor.orElse(null);
    }

}
