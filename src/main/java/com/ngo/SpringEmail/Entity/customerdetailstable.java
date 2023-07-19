package com.ngo.SpringEmail.Entity;


import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;


import java.util.Date;

@Entity
@Data
@Table(name="DONOR_PROFILE",uniqueConstraints = {@UniqueConstraint(columnNames = {"DONOR_ID","EMAIL","PAN"})})
@NoArgsConstructor
@AllArgsConstructor
public class customerdetailstable {

    @Id
    @Column(name="DONOR_ID")
    @GeneratedValue
    private int donor_id;

    @Column(name="DONOR_NAME")
    private String donor_name;

    @Column(name="ADDRESS")
    private String address;

    @Column(name="EMAIL")
    private String email;

    @Column(name="PAN")
    private String PAN;

    @Column(name="DATE")
    private Date date;


}
