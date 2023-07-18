package com.ngo.donor.dto;

import com.ngo.donor.Entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor@AllArgsConstructor
@ToString
public class CustomerRequest {
    private Customer customer;
}
