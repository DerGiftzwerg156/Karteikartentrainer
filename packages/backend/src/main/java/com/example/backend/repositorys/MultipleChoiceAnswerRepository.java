package com.example.backend.repositorys;

import com.example.backend.entity.MultipleChoiceAnswer;
import com.example.backend.entity.MultipleChoiceQuestion;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MultipleChoiceAnswerRepository extends CrudRepository<MultipleChoiceAnswer, Integer> {

    void deleteAllByMultipleChoiceQuestion(MultipleChoiceQuestion question);

    List<MultipleChoiceAnswer> findAllByMultipleChoiceQuestion(MultipleChoiceQuestion question);
}
