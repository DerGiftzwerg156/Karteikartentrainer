package com.example.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "standard_card")
public class StandardCard {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="card_id",nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "collection_id")
    private Collection collection;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private CardType cardType;

    @Column(name = "question",nullable = false)
    private String question;

    @Column(name = "answer", nullable = false)
    private String answer;

    public StandardCard() {
    }

    public StandardCard(Collection collection, CardType cardType, String question, String answer) {
        this.collection = collection;
        this.cardType = cardType;
        this.question = question;
        this.answer = answer;
    }

    public Long getId() {
        return id;
    }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }

    public CardType getCardType() {
        return cardType;
    }

    public void setCardType(CardType cardType) {
        this.cardType = cardType;
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
