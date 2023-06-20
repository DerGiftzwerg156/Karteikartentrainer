package com.example.backend.entity;

import javax.persistence.*;

@Entity
@Table(name = "multiple_choice_question")
public class MultipleChoiceQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "multiple_choice_question_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "collection_id")
    private Collection collection;

    @ManyToOne
    @JoinColumn(name = "type_id")
    private CardType cardType;

    @Column(name = "question", nullable = false)
    private String question;

    public MultipleChoiceQuestion() {
    }

    public MultipleChoiceQuestion(Collection collection, CardType cardType, String question) {
        this.collection = collection;
        this.cardType = cardType;
        this.question = question;
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
}
