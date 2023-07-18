package com.ngo.donor.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
@Table(name="customer", uniqueConstraints = @UniqueConstraint(columnNames = {"email","pan"}))
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int donor_id;

    @NotBlank(message = "Name is mandatory")
    private String donor_name;

    @NotBlank(message = "Address is mandatory")
    private String address;

    @NotNull
    @JsonFormat( pattern = "dd-MM-yyyy",shape= JsonFormat.Shape.STRING)
    @Temporal(TemporalType.DATE)
    private Date date_of_birth;

    @Column(unique = true)
    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email is not valid")
    private String email;

    @Column(unique = true)
    @NotBlank(message = "pan no is mandatory")
    private String pan;



    @OneToMany( targetEntity = Transaction_Table.class,cascade=CascadeType.ALL)
    @JoinColumn(name="donor_id",referencedColumnName = "donor_id",nullable = false)
    private List<Transaction_Table> transactionList;


}

