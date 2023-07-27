package com.targetindia.backend.dto;


import com.targetindia.backend.entity.DonorTransactions;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class TransactionDetailsDTO {
    private DonorTransactions transactionDetails;
    private String email;

}
