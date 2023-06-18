package com.example.backend.service;

import com.example.backend.entity.CardType;
import com.example.backend.entity.Collection;
import com.example.backend.entity.MultipleChoiceAnswer;
import com.example.backend.entity.MultipleChoiceQuestion;
import com.example.backend.repositorys.MultipleChoiceAnswerRepository;
import com.example.backend.repositorys.MultipleChoiceQuestionRepository;
import com.example.backend.requests.NewMultipleChoiceRequest;
import com.example.backend.responses.MultipleChoiceQuestionResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MultipleChoiceService {

    @Autowired
    private MultipleChoiceQuestionRepository questionRepository;

    @Autowired
    private MultipleChoiceAnswerRepository answerRepository;

    @Autowired
    private CardTypeService cardTypeService;

    public boolean createNewMultipleChoiceQuestion(Collection collection, NewMultipleChoiceRequest newMultipleChoiceRequest) {
        MultipleChoiceQuestion newQuestion = new MultipleChoiceQuestion(collection, getMultipleChoiceCardType(), newMultipleChoiceRequest.getMultipleChoiceQuestion().getQuestion());
        MultipleChoiceQuestion question = questionRepository.save(newQuestion);
        for (MultipleChoiceAnswer answer : newMultipleChoiceRequest.getMultipleChoiceAnswers()) {
            MultipleChoiceAnswer newAnswer = new MultipleChoiceAnswer(question, answer.getAnswer(), answer.isRight());
            answerRepository.save(newAnswer);
        }
        return true;
    }

    public void deleteQuestion(Long questionId) {
        MultipleChoiceQuestion question = questionRepository.findById(questionId);
        answerRepository.deleteAllByMultipleChoiceQuestion(question);
        questionRepository.deleteById(questionId);
    }

    public MultipleChoiceQuestionResponse[] getAllMultipleChoiceCardsByCollection(Collection collection) {
        List<MultipleChoiceQuestion> questionList = questionRepository.findAllByCollection(collection);
        MultipleChoiceQuestionResponse[] responses = new MultipleChoiceQuestionResponse[questionList.size()];
        for (int i = 0; i < questionList.size(); i++) {
            responses[i]=new MultipleChoiceQuestionResponse(questionList.get(i),getAnswersToQuestion(questionList.get(i)));
        }
        return responses;
    }

    private MultipleChoiceAnswer[] getAnswersToQuestion(MultipleChoiceQuestion question){
        List<MultipleChoiceAnswer> answerList = answerRepository.findAllByMultipleChoiceQuestion(question);
        MultipleChoiceAnswer[] answers = new MultipleChoiceAnswer[answerList.size()];
        return answerList.toArray(answers);
    }

    private CardType getMultipleChoiceCardType() {
        return cardTypeService.getSpecificCardType("MultipleChoice");
    }
}
