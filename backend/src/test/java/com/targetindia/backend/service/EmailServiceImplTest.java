package com.targetindia.backend.service;

import jakarta.mail.MessagingException;
import jakarta.mail.Session;
import jakarta.mail.internet.MimeMessage;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

public class EmailServiceImplTest {
    @Mock
    private JavaMailSender javaMailSender;
    @InjectMocks
    private EmailServiceImpl emailService;
    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testSendMailWithAttachment() throws MessagingException {
        String toEmail = "recipient@example.com";
        String subject = "Test Subject";
        String body = "Test Body";
        String attachmentFileName = "test_attachment.txt";
        byte[] attachment = "Test attachment content".getBytes();
        MimeMessage mimeMessage = new MimeMessage((Session) null);
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true);
        when(javaMailSender.createMimeMessage()).thenReturn(mimeMessage);
        doNothing().when(javaMailSender).send(any(MimeMessage.class));
        emailService.sendMailWithAttachment(toEmail, subject, body, attachmentFileName, attachment);
        verify(javaMailSender).createMimeMessage();
        verify(javaMailSender).send(mimeMessage);
    }
}