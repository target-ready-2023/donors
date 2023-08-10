package com.targetindia.backend.dto;

import com.targetindia.backend.entity.DonorTransactions;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.Date;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class DonorTransactionsDTO {
    private String donorID;
    private String donorName;
    private String donorEmail;
    private String invoiceId;
    private Long amount;
    private String transactionMode;
    private Date transactionDate;
    private String transactionId;
    private String fiscalYear;
}
