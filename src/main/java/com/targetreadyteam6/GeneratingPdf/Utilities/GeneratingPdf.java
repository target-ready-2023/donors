package com.targetreadyteam6.GeneratingPdf.Utilities;

import com.lowagie.text.*;
import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.PageSize;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;
import com.lowagie.text.pdf.*;
import com.targetreadyteam6.GeneratingPdf.entity.DonorProfile;
import com.targetreadyteam6.GeneratingPdf.entity.DonorTransactions;
import jakarta.servlet.http.HttpServletResponse;
import lombok.Data;

import java.io.IOException;
import java.math.BigDecimal;
import java.util.List;

@Data
public class GeneratingPdf {

    private DonorProfile donor;

    public void generate(HttpServletResponse response) throws DocumentException, IOException {


        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());

        List<DonorTransactions> transactions = donor.getTransactions();

        BigDecimal amount=BigDecimal.ZERO;
        for (DonorTransactions transaction : transactions) {

            amount=amount.add(transaction.getAmount());
        }


        document.open();
        Font fontTitle = FontFactory.getFont(FontFactory.TIMES_ROMAN, 20, Font.BOLD);

        Paragraph title = new Paragraph("Dream School Foundation-80G Certificate",fontTitle);
        title.setAlignment(Paragraph.ALIGN_CENTER);
        document.add(title);

        Font fontPara = FontFactory.getFont(FontFactory.TIMES_ROMAN, 12);
        Paragraph paragraph1 =new Paragraph("\n\n\nThis is to confirm that " +
                "the Dream School Foundation received a total amount of "+ amount+ " from  "
                + donor.getDonorName()+" as per the payment details given below: ",fontPara);
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
        for (DonorTransactions transaction : transactions) {
            table.addCell(new Phrase(transaction.getTransactionDate().toString(), fontValue));
            table.addCell(new Phrase(transaction.getAmount().toString(), fontValue));
            table.addCell(new Phrase(transaction.getTransactionMode(), fontValue));
            table.addCell(new Phrase(String.valueOf(transaction.getInvoiceId()), fontValue));
        }

        document.add(table);

        Paragraph paragraph2 =new Paragraph("\n\n\nWe thank you for your contribution and"+
                " helping support our work",fontPara);
        document.add(paragraph2);


        document.close();

    }
}
