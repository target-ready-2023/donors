package com.targetindia.backend.dto;

import lombok.Data;

import java.util.Date;

@Data
public class DonorProfileDTO {
    private String donorID;
    private String donorName;
    private String donorAddress;
    private Date dateOfBirth;
    private Long donorAmount;
    private String donorEmail;
    private String donorPan;
    // Other fields you want to include
}
