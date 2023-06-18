package com.example.backend.repositorys;

import com.example.backend.entity.Collection;
import com.example.backend.entity.MultipleChoiceQuestion;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MultipleChoiceQuestionRepository extends CrudRepository<MultipleChoiceQuestion, Integer> {

    void deleteById(Long id);

    MultipleChoiceQuestion findById(Long id);

    List<MultipleChoiceQuestion> findAllByCollection(Collection collection);
}
