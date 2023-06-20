package com.example.backend.entity;

public class MultipleChoiceAnswerPlan {
    private String answer;
    private boolean isRight;

    public MultipleChoiceAnswerPlan(String answer, boolean isRight) {
        this.answer = answer;
        this.isRight = isRight;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public boolean isRight() {
        return isRight;
    }

    public void setRight(boolean right) {
        isRight = right;
    }
}
