package com.example.backend.repositorys;

import com.example.backend.entity.Token;
import com.example.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

    User findByMail(String mail);

    User findByToken(Token token);

    void deleteByToken(Token token);
}
