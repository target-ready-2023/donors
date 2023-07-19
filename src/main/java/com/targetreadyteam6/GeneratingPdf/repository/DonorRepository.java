package com.targetreadyteam6.GeneratingPdf.repository;

import com.targetreadyteam6.GeneratingPdf.entity.DonorProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorRepository extends JpaRepository<DonorProfile,Integer>{

}
