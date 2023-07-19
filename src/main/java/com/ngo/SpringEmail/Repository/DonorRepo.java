package com.ngo.SpringEmail.Repository;

import com.ngo.SpringEmail.Entity.DonorTransaction;
import com.ngo.SpringEmail.Entity.customerdetailstable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorRepo extends JpaRepository<customerdetailstable,Integer>{

}
