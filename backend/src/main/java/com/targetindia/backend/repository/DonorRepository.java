package com.targetindia.backend.repository;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.entity.DonorProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface DonorRepository extends JpaRepository<DonorProfile, String> {

//    Query to get only donor_name, donor_address, donor_pan and donor_id from the database by finding using the email in repository
    @Query("SELECT NEW com.targetindia.backend.dto.DonorDetailsDTO(d.donorName, d.donorAddress, d.donorPan, d.donorID) FROM DonorProfile d WHERE d.donorEmail = :donorEmail")
    DonorDetailsDTO findDonorDetailsByEmail(@Param("donorEmail") String donorEmail);

//    Query to get all the details of the donor, given the email
    @Query("SELECT d FROM DonorProfile d WHERE d.donorEmail = :donorEmail")
    DonorProfile findDonorByEmail(@Param("donorEmail") String donorEmail);

}
