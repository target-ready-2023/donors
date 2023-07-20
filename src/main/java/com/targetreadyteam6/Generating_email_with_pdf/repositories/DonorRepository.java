package com.targetreadyteam6.Generating_email_with_pdf.repositories;


import com.targetreadyteam6.Generating_email_with_pdf.entities.DonorProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorRepository extends JpaRepository<DonorProfile,Integer>{

}
