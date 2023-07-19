package com.targetreadyteam6.GeneratingPdf.controllers;

import com.targetreadyteam6.GeneratingPdf.Utilities.GeneratingPdf;
import com.targetreadyteam6.GeneratingPdf.entity.DonorProfile;
import com.targetreadyteam6.GeneratingPdf.services.DonorService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import com.lowagie.text.*;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class PdfController {
    @Autowired
    private DonorService service;

    @GetMapping("/pdf/donor")
    public void generatePdf(HttpServletResponse response) throws DocumentException, IOException {

        response.setContentType("application/pdf");
        DateFormat dateFormat = new SimpleDateFormat("YYYY-MM-DD:HH:MM:SS");
        String currentDateTime = dateFormat.format(new Date());
        String headerKey = "Content-Disposition";
        String headerValue = "attachment; filename=pdf_" + currentDateTime + ".pdf";
        response.setHeader(headerKey, headerValue);

        DonorProfile donor = service.findPersonById(2);

        if (donor != null) {
            GeneratingPdf generator = new GeneratingPdf();
            generator.setDonor(donor);
            generator.generate(response);

        } else {
            System.out.print("No donor found for the give id");

        }


    }

}
