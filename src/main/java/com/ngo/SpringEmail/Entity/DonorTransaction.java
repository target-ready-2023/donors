package com.ngo.SpringEmail.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="DONOR_TRANSACTION",uniqueConstraints = {@UniqueConstraint(columnNames = {"INVOICE_ID","TRANSACTION_ID"})})
public class DonorTransaction {


        @Id
        @Column(name="INVOICE_ID")
        private int invoice_id;

        @Column(name="DONOR_ID")
        private int donor_id;

        @Column(name="AMOUNT")
        private int amount;

        @Column(name="TRANSACTION_MODE")
        private String transaction_mode;

        @Column(name="TRANSACTION_DATE")
        private Date transaction_date;

        @Column(name="TRANSACTION_ID")
        private String transaction_id;

        @Column(name="FISCAL_YEAR")
        private String fiscal_year;
}
