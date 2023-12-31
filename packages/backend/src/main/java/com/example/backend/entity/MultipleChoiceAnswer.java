package com.example.backend.entity;

import javax.persistence.*;

@Entity
@Table(name = "multiple_choice_answer")
public class MultipleChoiceAnswer {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "multiple_choice_answer_id", nullable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "multiple_choice_question_id")
    private MultipleChoiceQuestion multipleChoiceQuestion;

    @Column(name = "answer", nullable = false)
    private String answer;

    @Column(name = "is_right", nullable = false)
    private boolean correct;

    public MultipleChoiceAnswer() {
    }

    public MultipleChoiceAnswer(MultipleChoiceQuestion multipleChoiceQuestion, String answer, boolean correct) {
        this.multipleChoiceQuestion = multipleChoiceQuestion;
        this.answer = answer;
        this.correct = correct;
    }

    public Long getId() {
        return id;
    }

    public MultipleChoiceQuestion getMultipleChoiceQuestion() {
        return multipleChoiceQuestion;
    }

    public void setMultipleChoiceQuestion(MultipleChoiceQuestion multipleChoiceQuestion) {
        this.multipleChoiceQuestion = multipleChoiceQuestion;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public boolean isCorrect() {
        return correct;
    }

    public void setCorrect(boolean correct) {
        this.correct = correct;
    }
}
