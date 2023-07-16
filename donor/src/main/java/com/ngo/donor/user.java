package com.ngo.donor;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="student")
public class user {
    @Id
    @Column(name="ID")
    private int id;
    @Column(name="Name")
    private String name;
    @Column(name="Age")
    private int age;
    @Column(name="Department")
    private String dept;

}
