package com.example.backend.requests;

import com.example.backend.entity.Collection;
import com.example.backend.entity.MultipleChoiceAnswer;
import com.example.backend.entity.MultipleChoiceQuestion;

public class NewMultipleChoiceRequest {
    private Collection collection;
    private MultipleChoiceQuestion multipleChoiceQuestion;
    private MultipleChoiceAnswer[] multipleChoiceAnswers;

    public NewMultipleChoiceRequest(Collection collection, MultipleChoiceQuestion multipleChoiceQuestion, MultipleChoiceAnswer[] multipleChoiceAnswers) {
        this.collection = collection;
        this.multipleChoiceQuestion = multipleChoiceQuestion;
        this.multipleChoiceAnswers = multipleChoiceAnswers;
    }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }

    public MultipleChoiceQuestion getMultipleChoiceQuestion() {
        return multipleChoiceQuestion;
    }

    public void setMultipleChoiceQuestion(MultipleChoiceQuestion multipleChoiceQuestion) {
        this.multipleChoiceQuestion = multipleChoiceQuestion;
    }

    public MultipleChoiceAnswer[] getMultipleChoiceAnswers() {
        return multipleChoiceAnswers;
    }

    public void setMultipleChoiceAnswers(MultipleChoiceAnswer[] multipleChoiceAnswers) {
        this.multipleChoiceAnswers = multipleChoiceAnswers;
    }
}
