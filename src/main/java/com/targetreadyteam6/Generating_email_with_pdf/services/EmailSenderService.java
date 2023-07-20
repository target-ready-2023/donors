
package com.targetreadyteam6.Generating_email_with_pdf.services;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
    @Autowired
    private JavaMailSender javaMailSender;
    public void sendMailWithAttachment(String toEmail,
                                       String subject,
                                       String body,String attachmentFileName,
                                       byte[] attachment) throws MessagingException {


        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage,true);
        mimeMessageHelper.setFrom("layabadireddi@gmail.com");
        mimeMessageHelper.setTo(toEmail);
        mimeMessageHelper.setText(body);
        mimeMessageHelper.setSubject(subject);

        ByteArrayResource byteArrayResource = new ByteArrayResource(attachment);
        mimeMessageHelper.addAttachment(attachmentFileName, byteArrayResource);
        javaMailSender.send(mimeMessage);
        System.out.println("Mail with attachment sent successfully...");

    }
}
