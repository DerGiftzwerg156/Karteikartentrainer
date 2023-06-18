package com.example.backend.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name="token")
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "token_id",nullable = false)
    private Long id;

    @Column(name = "token",nullable = false)
    private String token;

    @Column(name = "create_timestamp",nullable = false)
    private Timestamp createTimestamp;

    public Token() {
    }

    public Token(String token, Timestamp createTimestamp) {
        this.token = token;
        this.createTimestamp = createTimestamp;
    }

    public Long getId() {
        return id;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Timestamp getCreateTimestamp() {
        return createTimestamp;
    }

    public void setCreateTimestamp(Timestamp createTimestamp) {
        this.createTimestamp = createTimestamp;
    }
}
