package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "standardCard")
public class StandardCard {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="standard_card_id",nullable = false)
    private Long standardCardId;

    @Column(name = "question",nullable = false)
    private String question;

    @Column(name = "answer", nullable = false)
    private String answer;

    public StandardCard() {
    }

    public StandardCard(String question, String answer) {
        this.question = question;
        this.answer = answer;
    }

    public Long getStandardCardId() {
        return standardCardId;
    }

    public void setStandardCardId(Long standardCardId) {
        this.standardCardId = standardCardId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }
}
