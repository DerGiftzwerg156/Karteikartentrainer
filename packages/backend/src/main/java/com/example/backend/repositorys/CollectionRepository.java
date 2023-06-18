package com.example.backend.repositorys;

import com.example.backend.entity.Collection;
import com.example.backend.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CollectionRepository extends CrudRepository<Collection, Integer> {

    Collection findByAccessKey(String key);

    Collection findById(Long id);

    List<Collection> findAllByUser(User user);

    void deleteById(Long id);
}
