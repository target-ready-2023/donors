package com.targetindia.backend.controller;

import com.targetindia.backend.dto.DonorDetailsDTO;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.repository.DonorRepository;
import com.targetindia.backend.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/donor")
public class DonorController {
    @Autowired
    private final DonorService donorService;

    private static final Logger logger = LoggerFactory.getLogger(DonorController.class);

    @Autowired
    private DonorRepository donorRepository;

    @Autowired
    public DonorController(DonorService donorService) {
        this.donorService = donorService;
    }

//    API for adding donor details to database
    @PostMapping("/addDonor")
    public String addDonor(@RequestBody DonorProfile donor){
        logger.info("Received donor object: {}", donor);
        donorService.saveDonor(donor);
        return "New Donor added!!";
    }

//    API for finding a donor details(donor_id, donor_name, donor_address, donor_pan) by checking with email in database
    @GetMapping("/findByEmail")
    public ResponseEntity<?> getDonorByEmail(@RequestParam String donorEmail) {
        DonorDetailsDTO donor = donorService.findDonorByEmail(donorEmail);
        if (donor != null) {
            // The donor was found, return the required information (name, address, PAN).
            return ResponseEntity.ok(donor);
        } else {
            // The donor was not found, return a response with an appropriate status code.
            return ResponseEntity.notFound().build();
        }
    }

//    API for getting all the donors details from the database
    @GetMapping("/getAllDonors")
    public List<DonorProfile> getAllDonors(){
        return donorRepository.findAll();
    }
}
