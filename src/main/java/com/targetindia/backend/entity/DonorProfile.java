package com.targetindia.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.List;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="donor_profile")
@Entity
public class DonorProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="donor_id", unique = true, nullable = false)
    private String donorID;

    @NotBlank(message = "Name is mandatory")
    @Column(name="donor_name", nullable = false)
    private String donorName;

    @NotBlank(message = "Address is mandatory")
    @Column(name="donor_address", nullable = false)
    private String donorAddress;

    @NotNull(message = "Date of Birth is mandatory")
    @JsonFormat( pattern = "dd-MM-yyyy",shape= JsonFormat.Shape.STRING)
    @Temporal(TemporalType.DATE)
    @Column(name="donor_date_of_birth")
    private Date dateOfBirth;


    @Column(name="donor_email", unique = true, nullable = false)
    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email is not valid")
    private String donorEmail;

    @Column(name="donor_pan", unique = true, nullable = false)
    @NotBlank(message = "PAN number is mandatory")
    private String donorPan;

    @OneToMany(targetEntity = DonorTransactions.class,cascade=CascadeType.ALL , fetch = FetchType.EAGER)
    @JoinColumn(name="donor_id",referencedColumnName = "donor_id",nullable = false)
    private List<DonorTransactions> transactions;


}
