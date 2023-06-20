package com.example.backend.requests;

import com.example.backend.entity.Collection;
import com.example.backend.entity.StandardCard;

public class NewStandardCardRequest {
    private Collection collection;
    private String question;
    private String answer;

    public NewStandardCardRequest(Collection collection, String question, String answer) {
        this.collection = collection;
        this.question = question;
        this.answer = answer;
    }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
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
