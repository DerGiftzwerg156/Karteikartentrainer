package com.example.backend.repositorys;

import com.example.backend.entity.StandardCard;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StandardCardRepository extends CrudRepository<StandardCard, Integer> {
}
