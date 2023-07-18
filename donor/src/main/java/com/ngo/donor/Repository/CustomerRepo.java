package com.ngo.donor.Repository;

import com.ngo.donor.Entity.Customer;
import com.ngo.donor.dto.OrderResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CustomerRepo extends JpaRepository<Customer,Integer> {

//    Customer findByEmail(String email);
    @Query("SELECT new com.ngo.donor.dto.OrderResponse(c.donor_name,c.address,c.pan) From Customer c WHERE c.email=:n")
    public List<OrderResponse> getInfoById(@Param("n")String email);
}
