package com.example.backend.requests;

public class ActivateAccountRequest {
    private String mail;
    private int activationCode;

    public ActivateAccountRequest(String mail, int activationCode) {
        this.mail = mail;
        this.activationCode = activationCode;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public int getActivationCode() {
        return activationCode;
    }

    public void setActivationCode(int activationCode) {
        this.activationCode = activationCode;
    }
}
