package com.example.backend.repositorys;

import com.example.backend.entity.Token;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenRepository extends CrudRepository<Token, Integer> {

    Token findById(Long id);

    void deleteById(Long id);
}
