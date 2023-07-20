package com.targetreadyteam6.Generating_email_with_pdf.controllers;

import com.lowagie.text.DocumentException;
import com.targetreadyteam6.Generating_email_with_pdf.entities.DonorProfile;
import com.targetreadyteam6.Generating_email_with_pdf.entities.DonorTransactions;
import com.targetreadyteam6.Generating_email_with_pdf.services.DonorService;
import com.targetreadyteam6.Generating_email_with_pdf.services.EmailSenderService;
import com.targetreadyteam6.Generating_email_with_pdf.utilities.GeneratingPdf;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/pdf")
public class PdfAndEmailController {

    private final DonorService donorService;
    private final EmailSenderService emailSenderService;

    @Autowired
    public PdfAndEmailController(DonorService donorService, EmailSenderService emailSenderService) {
        this.donorService = donorService;
        this.emailSenderService = emailSenderService;
    }

//    @GetMapping("/pdf/donor")
    @GetMapping("/sendEmailWithPdf")
    public ResponseEntity<String> generatePdfAndSendEmail() {
        try {
            DonorProfile donor = donorService.findPersonById(3);

        if (donor != null) {
            GeneratingPdf generator = new GeneratingPdf();
            generator.setDonor(donor);
            byte[] pdfBytes = generator.generate();


            String attachmentFileName = donor.getDonorName() + "_80g certificate" + ".pdf";
            List<DonorTransactions> transactions = donor.getTransactions();
            String year=transactions.get(0).getFiscalYear();


            emailSenderService.sendMailWithAttachment(donor.getDonorEmail(),
                    donor.getDonorName()+" | 80G Certificate | "+ year ,
                    "Dear " + donor.getDonorName() + ",\n\nWe are happy to inform  you that" +
                            " we have generated the 80G certificate for the Financial Year "+ year+
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