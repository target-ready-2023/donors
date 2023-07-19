package com.ngo.SpringEmail.Controller;

import com.ngo.SpringEmail.EmailSenderService;
import com.ngo.SpringEmail.Entity.customerdetailstable;
import com.ngo.SpringEmail.Services.DonorService;
import com.ngo.SpringEmail.SpringEmailApplication;
import jakarta.mail.MessagingException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import org.springframework.http.*;

import java.util.Collections;
import java.util.List;

@RestController
public class DonorController {

    @Autowired
    private  DonorService donorService;

    @Autowired
	private  EmailSenderService emailSenderService;

//    @GetMapping(value = "/test")
//    public ResponseEntity<String> getTest() throws MessagingException {
//
//        return new ResponseEntity<>("test", HttpStatus.OK);
//
//    }


    @GetMapping(value = "/{donor_id}/email")
    public List<String> getEmailById(@PathVariable("donor_id") int donor_id) throws MessagingException {
        List<String> k = donorService.getEmailById(2);
        String email = k.get(0);
        String name = k.get(1);
        String year = k.get(2);

        triggerEmail(email, name, year);

        return k;

    }

    public void triggerEmail(String email, String name, String year) throws MessagingException {
        emailSenderService.sendMailWithAttachment(email,
                name+" | 80G Certificate | "+ year,
                "Dear "+name+",\n\nWe are happy to to inform you that we have generated the 80G certificate for the Financial\nYear "+ year+". Please find it attached on this email.\n\n Please do not hesitate to reply to this email with any questions!\n\nThank You,\nDream School Foundation",
                "C:/Users/satya/Downloads/sample pdf.pdf");

    }


}
