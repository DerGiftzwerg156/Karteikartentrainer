package com.example.backend.responses;

import com.example.backend.entity.MultipleChoiceAnswer;
import com.example.backend.entity.MultipleChoiceQuestion;

public class MultipleChoiceQuestionResponse {
    private MultipleChoiceQuestion question;
    private MultipleChoiceAnswer[] answers;

    public MultipleChoiceQuestionResponse(MultipleChoiceQuestion question, MultipleChoiceAnswer[] answers) {
        this.question = question;
        this.answers = answers;
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
