package com.example.backend.responses;

import com.example.backend.entity.CardType;
import com.example.backend.entity.MultipleChoiceAnswer;
import com.example.backend.entity.MultipleChoiceQuestion;

public class MultipleChoiceQuestionResponse {
    private CardType cardType;
    private MultipleChoiceQuestion question;
    private MultipleChoiceAnswer[] answers;

    public MultipleChoiceQuestionResponse(CardType cardType, MultipleChoiceQuestion question, MultipleChoiceAnswer[] answers) {
        this.cardType = cardType;
        this.question = question;
        this.answers = answers;
    }

    public CardType getCardType() {
        return cardType;
    }

    public void setCardType(CardType cardType) {
        this.cardType = cardType;
    }

    public MultipleChoiceQuestion getQuestion() {
        return question;
    }

    public void setQuestion(MultipleChoiceQuestion question) {
        this.question = question;
    }

    public MultipleChoiceAnswer[] getAnswers() {
        return answers;
    }

    public void setAnswers(MultipleChoiceAnswer[] answers) {
        this.answers = answers;
    }
}
