package com.ngo.SpringEmail;

import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class SpringEmailApplication {
	@Autowired
	private EmailSenderService emailSenderService;
	public static void main(String[] args) {

		SpringApplication.run(SpringEmailApplication.class, args);

	}
	@EventListener(ApplicationReadyEvent.class)
	public void triggerEmail() throws MessagingException {
		emailSenderService.sendMailWithAttachment("layabadireddi71@gmail.com",
				"<Name> | 80G Certificate | <Fiscal Year>",
				"Dear <Name>,\n\n We are happy to to inform you that we have generated the 80G certificate for the Financial\n Year <Year>. Please find it attached on this email.\n\n Please do not hesitate to reply to this email with any questions!\n\nThank You,\nDream School Foundation",
				"C:/Users/satya/Downloads/sample pdf.pdf");

	}
}
