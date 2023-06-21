package com.example.backend.service;

import com.example.backend.entity.User;
import org.springframework.stereotype.Service;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;

@Service
public class EmailService {

    private final String benutzername = "noreply@home.kenosserver.de";
    private final String passwort = "eiX1eu7v1";
    private final String host = "smtp.ionos.de";
    private final int port = 587;

    private void sendEmail(String to, String subject, String body) {
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", port);

        Session session = Session.getInstance(props,
                new Authenticator() {
                    protected PasswordAuthentication getPasswordAuthentication() {
                        return new PasswordAuthentication(benutzername, passwort);
                    }
                });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(benutzername));
            message.setRecipients(Message.RecipientType.TO,
                    InternetAddress.parse(to));
            message.setSubject(subject);
            message.setText(body);

            Transport.send(message);

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

    public void sendAccountVerificationMail(User user) {
        sendEmail(user.getMail(), "Account Activation",
                "Hallo,"
                        + "\n\nHier ist dein Verifizierung Link"
                        + "\n\nBitte öffne diesen Link und Verifiziere deinen Account!"
                        +"\n\n Sollte es Probleme oder Rückfragen geben, melden sie sich gerne!"
                        + "\n\nhttps://cardTrainer.kenosserver.de/verify/"+user.getMail()+"/"+user.getVerificationCode()
                        + "\n\nNice Grüße"
                        + "\n"
                        + "\nDein CardTrain Team");
    }
}
