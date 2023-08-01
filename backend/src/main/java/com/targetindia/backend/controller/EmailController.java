package com.targetindia.backend.controller;

import com.lowagie.text.DocumentException;
import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import com.targetindia.backend.service.DonorService;
import com.targetindia.backend.service.EmailService;
import com.targetindia.backend.service.TransactionService;
import com.targetindia.backend.utilities.PdfGenerator;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/email")
public class EmailController {
    @Autowired
    private final DonorService donorService;
    @Autowired
    private final EmailService emailService;

    EmailController(DonorService donorService, EmailService emailService, TransactionService transactionService) {
        this.donorService = donorService;
        this.emailService = emailService;
    }

//    API for generating a PDF as an attachment and triggering an email with the attchment with th given Donor Email
    @GetMapping("/send")
    public ResponseEntity<String> generateEmailWithAttachment(@RequestParam String donorEmail, String fiscalYear ) {
        try {
            DonorProfile donor = donorService.findDonorDetailsByEmail(donorEmail);

            if (donor != null) {
                PdfGenerator generator = new PdfGenerator();
                generator.setDonor(donor);
                byte[] pdfBytes = generator.generate(fiscalYear);

                String attachmentFileName = donor.getDonorName() + "_80g certificate" + ".pdf";
                List<DonorTransactions> transactions = donor.getTransactions();
                String year = fiscalYear;

                emailService.sendMailWithAttachment(donor.getDonorEmail(),
                        donor.getDonorName() + " | 80G Certificate | " + year,
                        "Dear " + donor.getDonorName() + ",\n\nWe are happy to inform  you that" +
                                " we have generated the 80G certificate for the Financial Year " + year +
                                ". Please find it attached on this email." +
                                "\n\nPlease do not hesitate to reply to this email with any questions!" +
                                "\n\nThank You,\nDream School Foundation",
                        attachmentFileName,
                        pdfBytes);

                return ResponseEntity.ok("Email with PDF attachment sent successfully!");
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (DocumentException | IOException | MessagingException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email with PDF attachment.");
        }
    }
}
