package com.targetreadyteam6.Generating_email_with_pdf.services;



import com.targetreadyteam6.Generating_email_with_pdf.entities.DonorProfile;
import com.targetreadyteam6.Generating_email_with_pdf.repositories.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DonorService {

    private final DonorRepository donorRepository;

    @Autowired
    public DonorService(DonorRepository donorRepository) {
        this.donorRepository = donorRepository;
    }


    public List<DonorProfile> findAllDonor() {
        return donorRepository.findAll();
    }


    public DonorProfile findPersonById(Integer id) {
        Optional<DonorProfile> optionalDonor = donorRepository.findById(id);
        return optionalDonor.orElse(null);
    }


}
