package com.targetindia.backend.service;

import jakarta.mail.MessagingException;

public interface EmailService {
    public void sendMailWithAttachment(String toEmail,
                                  String subject,
                                  String body,String attachmentFileName,
                                  byte[] attachment) throws MessagingException;
}
