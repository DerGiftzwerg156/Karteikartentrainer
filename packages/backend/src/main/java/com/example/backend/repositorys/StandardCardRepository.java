package com.example.backend.repositorys;

import com.example.backend.entity.Collection;
import com.example.backend.entity.StandardCard;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StandardCardRepository extends CrudRepository<StandardCard, Integer> {
    void deleteById(Long id);

    void deleteAllByCollection(Collection collection);

    StandardCard findById(Long id);

    List<StandardCard> findAllByCollection(Collection collection);
}
