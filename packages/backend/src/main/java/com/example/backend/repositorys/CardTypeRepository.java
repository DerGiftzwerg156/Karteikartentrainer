package com.example.backend.repositorys;

import com.example.backend.entity.CardType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardTypeRepository extends CrudRepository<CardType, Integer> {
    CardType findByName(String name);
}
