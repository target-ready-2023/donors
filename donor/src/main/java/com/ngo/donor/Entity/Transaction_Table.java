package com.ngo.donor.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@ToString
@Table(name="Transaction_table")
public class Transaction_Table {

        @Id
        private int Transaction_Id;

        private int Invoice_Id;
        private int Fiscal_Year;

        private int amount;

        private String transaction_mode;


        @JsonFormat(pattern = "dd-MM-yyyy",shape=JsonFormat.Shape.STRING)
        @Temporal(TemporalType.DATE)
        private Date date_of_transaction;


    }


