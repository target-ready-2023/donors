package com.ngo.SpringEmail.Services;


import com.ngo.SpringEmail.Entity.customerdetailstable;
import com.ngo.SpringEmail.Repository.DonorRepo;
import com.ngo.SpringEmail.SpringEmailApplication;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.*;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Calendar;
import java.util.List;

@Service
public class DonorService {

    @Autowired
    private DonorRepo donorRepo;


    public List<String> getEmailById(Integer donor_id) throws MessagingException {
        customerdetailstable Customerdetailstable = donorRepo.findById(donor_id).orElse(null);
        String e = (Customerdetailstable != null) ? Customerdetailstable.getEmail() : null;
        String name = (Customerdetailstable != null) ? Customerdetailstable.getDonor_name() : null;
        String year = (Customerdetailstable != null) ? String.valueOf(Customerdetailstable.getDate()) : null;
        System.out.println(e+name+year);
        int FY=-1;
        if(year != null){
            Calendar cal = Calendar.getInstance();
            cal.setTime(Customerdetailstable.getDate());
            FY = cal.get(Calendar.YEAR);
        }
        String s = FY + "-" + (FY+1);


        return Arrays.asList(e, name, s);
    }



}


