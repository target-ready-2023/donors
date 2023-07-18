package com.ngo.donor.Repository;

import com.ngo.donor.Entity.Customer;
import com.ngo.donor.Entity.Transaction_Table;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransRepo extends JpaRepository<Transaction_Table,Integer> {
}
