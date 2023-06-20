package com.example.backend.requests;

import com.example.backend.entity.Collection;
import com.example.backend.entity.MultipleChoiceAnswer;
import com.example.backend.entity.MultipleChoiceAnswerPlan;
import com.example.backend.entity.MultipleChoiceQuestion;

public class NewMultipleChoiceRequest {
    private Collection collection;
    private String question;
    private MultipleChoiceAnswerPlan[] answers;

    public NewMultipleChoiceRequest(Collection collection, String question, MultipleChoiceAnswerPlan[] answers) {
        this.collection = collection;
        this.question = question;
        this.answers = answers;
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

    public MultipleChoiceAnswerPlan[] getAnswers() {
        return answers;
    }

    public void setAnswers(MultipleChoiceAnswerPlan[] answers) {
        this.answers = answers;
    }
}
