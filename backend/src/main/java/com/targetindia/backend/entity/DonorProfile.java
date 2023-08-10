package com.targetindia.backend.entity;

import jakarta.persistence.*;
import lombok.*;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name="donor_profile")
@Entity
public class DonorProfile {
    @Id
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

    @Column(name="donor_amount", nullable = false)
    private Long donorAmount;

    @Column(name="donor_email", unique = true, nullable = false)
    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email is not valid")
    private String donorEmail;

    @Column(name="donor_pan", unique = true, nullable = false)
    @NotBlank(message = "PAN number is mandatory")
    private String donorPan;

    @JoinColumn(referencedColumnName = "donor_id", name = "donor_id", nullable = false)
    @OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<DonorTransactions> transactions;
}
