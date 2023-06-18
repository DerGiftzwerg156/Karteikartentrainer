package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "token_id")
    private Token token;

    @Column(name = "mail", nullable = false)
    private String mail;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "verified", nullable = false)
    private boolean verified;

    @Column(name = "verification_code", nullable = false)
    private int verificationCode;

    public User() {
    }

    public User(String mail, String password,int verificationCode) {
        this.mail = mail;
        this.password = password;
        this.verified = false;
        this.verificationCode = verificationCode;
    }

    public Long getId() {
        return id;
    }

    public Token getToken() {
        return token;
    }

    public void setToken(Token token) {
        this.token = token;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public int getVerificationCode() {
        return verificationCode;
    }

    public void setVerificationCode(int verificationCode) {
        this.verificationCode = verificationCode;
    }
}
