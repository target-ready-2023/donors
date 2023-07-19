package com.ngo.donor.controller;

import com.ngo.donor.Entity.Customer;
import com.ngo.donor.Entity.Transaction_Table;
import com.ngo.donor.Repository.CustomerRepo;
import com.ngo.donor.Repository.TransRepo;
import com.ngo.donor.dto.CustomerRequest;
import com.ngo.donor.dto.OrderResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
@RestController
public class CustomerController {


        @Autowired
        private CustomerRepo customerRepository;
        @Autowired
        private TransRepo productRepository;
        @PostMapping("/addCustomer")
        public Customer placeOrder(@RequestBody CustomerRequest request){
            return customerRepository.save(request.getCustomer());
        }

        @GetMapping("/getCustomer")
        public List<Customer> findAllOrders(){
            return customerRepository.findAll();
        }

        @GetMapping("/getCustomerInfoById/{email}")
        public List<OrderResponse> getAllTransaction(@PathVariable String email){
            return customerRepository.getInfoById(email);
        }

    }

