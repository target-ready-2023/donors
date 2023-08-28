package com.targetindia.backend.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;

import java.util.Date;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "transactions")
public class DonorTransactions {

    public DonorTransactions(String invoiceId, Long amount, String transactionMode,
                             Date transactionDate, String transactionId, String fiscalYear) {
        this.invoiceId = invoiceId;
        this.amount = amount;
        this.transactionMode = transactionMode;
        this.transactionDate = transactionDate;
        this.transactionId = transactionId;
        this.fiscalYear = fiscalYear;
    }

    @Id
    @Column(name = "invoice_id", nullable = false)
    @NotBlank(message = "invoice Id should not be empty")
    private String invoiceId;

    @Column(name = "amount")
    @Positive(message = "Amount should be Positive")
    private Long amount;

    @Column(name = "transaction_mode", nullable = false)
    private String transactionMode;

    @JsonFormat(pattern = "dd-MM-yyyy", shape = JsonFormat.Shape.STRING)
    @Temporal(TemporalType.DATE)
    @Column(name = "transaction_date")
    private Date transactionDate;

    @Column(name = "transaction_id", unique = true, nullable = false)
    private String transactionId;

    @Column(name = "fiscal_year")
    private String fiscalYear;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "donor_id", referencedColumnName = "donor_id", insertable = false, updatable = false)
    private DonorProfile donorProfile;
}