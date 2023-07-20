package com.targetreadyteam6.Generating_email_with_pdf.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "profile")
public class DonorProfile {
    @Id
    @GeneratedValue(generator = "increment")
    @Column(name="donor_id")
    private Integer donorID;

    @Column(name="donor_name")
    private String DonorName;

    @Column(name="donor_address")
    private String DonorAddress;

    @Column(name="donor_date_of_birth")
    private LocalDate dateOfBirth;

    @Column(name="donor_email")
    private String donorEmail;

    @Column(name="donor_pan")
    private String donorPan;

    @OneToMany(mappedBy = "donor", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<DonorTransactions> transactions;


}
