package com.targetindia.backend.utilities;


import com.lowagie.text.*;
import com.lowagie.text.Font;
import com.lowagie.text.Image;
import com.lowagie.text.pdf.CMYKColor;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import com.targetindia.backend.entity.DonorProfile;
import com.targetindia.backend.entity.DonorTransactions;
import lombok.Data;

import java.awt.*;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;


@Data
public class PdfGenerator {
    private DonorProfile donor;
    public  byte[] generate(String fiscalYear) throws DocumentException, IOException {


        Document document = new Document(PageSize.A4);
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        PdfWriter writer = PdfWriter.getInstance(document, outputStream);
        PdfWriter.getInstance(document, outputStream);

        List<DonorTransactions> transactions = donor.getTransactions();
        List<DonorTransactions> fiscalTransactions = new ArrayList<>();
        Long amount = 0L;
        for (DonorTransactions transaction : transactions) {

            if(transaction.getFiscalYear().equals(fiscalYear)) {
                amount += transaction.getAmount();
                fiscalTransactions.add(transaction);
            }
        }


        document.open();

        Font fontTitle = FontFactory.getFont(FontFactory.TIMES_ROMAN, 18, Font.BOLD);

        // Add the image first
        Image image = Image.getInstance("C:/Users/Sri Laxmi/Desktop/Donors/backend/src/main/resources/static/DSF_Logo.png"); // Replace with the path to your image file
        image.scaleAbsolute(50, 50);

        // Position the image in the center of the page at the top
        float xPosition = (PageSize.A4.getWidth() - image.getScaledWidth()) / 2;
        float yPosition = PageSize.A4.getHeight() - image.getScaledHeight() - 72; // 72 is the margin from the top
        image.setAbsolutePosition(xPosition, yPosition);
        document.add(image);

        // Add the title after the image
        Paragraph title = new Paragraph("\n\n\n\nDream School Foundation-80G Certificate", fontTitle);
        title.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(title);

        Font fontBold = FontFactory.getFont(FontFactory.TIMES_ROMAN, 12, Font.BOLD);
        Paragraph financialYearParagraph = new Paragraph("\n\n Financial Cycle: " + fiscalYear.substring(2), fontBold);
        financialYearParagraph.setAlignment(Element.ALIGN_CENTER);
        document.add(financialYearParagraph);

        LocalDate today = LocalDate.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd-MM-yyyy");
        String formattedDate = today.format(formatter);
        Paragraph Date = new Paragraph("\n\n Date: " + formattedDate, fontBold);
        document.add(Date);

        Font fontPara = FontFactory.getFont(FontFactory.TIMES_ROMAN, 12);
        Paragraph paragraph1 = new Paragraph("\n\n\nThis is to confirm that the Dream School Foundation received a total amount of ", fontPara);
        paragraph1.add(new Chunk("Rs." + amount, FontFactory.getFont(FontFactory.TIMES_ROMAN, 12, Font.BOLD)));
        paragraph1.add(" from ");
        Chunk boldDonorName = new Chunk(donor.getDonorName(), FontFactory.getFont(FontFactory.TIMES_ROMAN, 12, Font.BOLD));
        paragraph1.add(boldDonorName);
        paragraph1.add(" as per the payment details given below: ");
        document.add(paragraph1);
        document.add(Chunk.NEWLINE);

        PdfPTable table = new PdfPTable(4);
        table.setWidthPercentage(100f);
        table.setWidths(new int[] { 2,3, 3,2});
        table.setSpacingBefore(5);


        PdfPCell cell = new PdfPCell();
        cell.setBackgroundColor(CMYKColor.WHITE);
        cell.setPadding(5);
        Font font = FontFactory.getFont(FontFactory.TIMES_ROMAN);
        font.setColor(CMYKColor.BLACK);


        Font fontHeader = FontFactory.getFont(FontFactory.TIMES_ROMAN, 12, Font.BOLD);
        cell.setPhrase(new Phrase("Date", fontHeader));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Amount", fontHeader));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Transaction Mode", fontHeader));
        table.addCell(cell);
        cell.setPhrase(new Phrase("Invoice ID", fontHeader));
        table.addCell(cell);


        Font fontValue = FontFactory.getFont(FontFactory.TIMES_ROMAN, 11);
        if(!fiscalTransactions.isEmpty()){
            for (DonorTransactions transaction : fiscalTransactions) {
                SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
                String date = dateFormat.format(transaction.getTransactionDate());
                table.addCell(new Phrase(date, fontValue));
                table.addCell(new Phrase(transaction.getAmount().toString(), fontValue));
                table.addCell(new Phrase(transaction.getTransactionMode(), fontValue));
                table.addCell(new Phrase(String.valueOf(transaction.getInvoiceId()), fontValue));
            }
        }
        else{
            Paragraph transactionsMade = new Paragraph("\n\n No Transactions made for the Year : " + fiscalYear.substring(2), fontBold);
            financialYearParagraph.setAlignment(Element.ALIGN_CENTER);
            document.add(transactionsMade);
        }


        document.add(table);

        Paragraph paragraph2 =new Paragraph("\n\n\nWe thank you for your contribution and helping support our work", fontPara);
        document.add(paragraph2);

        Paragraph aboutUs = new Paragraph("\n\n\nDream School Foundation,\n323 MG Road,\nBengaluru\nPostal Code: 560023\nIndia");
        document.add(aboutUs);

        document.close();
        return outputStream.toByteArray();

    }
}
