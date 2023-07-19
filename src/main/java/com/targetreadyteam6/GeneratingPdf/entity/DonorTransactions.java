package com.targetreadyteam6.GeneratingPdf.entity;

import jakarta.persistence.*;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "transactions")
public class DonorTransactions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "invoice_id")
    private Integer invoiceId;


    @Column(name = "amount")
    private BigDecimal amount;

    @Column(name = "transaction_mode")
    private String transactionMode;

    @Column(name = "transaction_date")
    private LocalDate transactionDate;

    @Column(name = "transaction_id")
    private Integer transactionId;

    @Column(name = "fiscal_year")
    private String fiscalYear;


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "donor_id")
    private DonorProfile donor;

}