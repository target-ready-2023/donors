package com.targetindia.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor

//DTO - Data Transfer Objects

public class DonorDetailsDTO {
    private String donorName;
    private String donorAddress;
    private String donorPan;
    private String donorID;
}
