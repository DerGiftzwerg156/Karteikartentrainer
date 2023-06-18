package com.example.backend.service;

import com.example.backend.entity.Collection;
import com.example.backend.entity.User;
import com.example.backend.repositorys.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.List;

@Service
public class CollectionService {

    @Autowired
    private CollectionRepository collectionRepository;

    public Collection createCollection(Collection collection) {
        Collection newCollection = new Collection(collection.getUser(), collection.getName(), collection.getDescription(), generateRandomCode());
        return collectionRepository.save(newCollection);
    }

    public Collection getCollection(String accessKey) {
        return collectionRepository.findByAccessKey(accessKey);
    }

    public Collection[] getAllCollectionByUser(User user) {
        List<Collection> collectionList = collectionRepository.findAllByUser(user);
        Collection[] collections = new Collection[collectionList.size()];
        return collectionList.toArray(collections);
    }

    public void deleteCollection(Long collectionId) {
        collectionRepository.deleteById(collectionId);
    }

    public Collection getCollectionById(Long id){
        return collectionRepository.findById(id);
    }


    private String generateRandomCode() {
        SecureRandom random = new SecureRandom();
        StringBuilder code = new StringBuilder();

        String characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // Zeichensatz mit Zahlen und Großbuchstaben

        for (int i = 0; i < 6; i++) {
            int randomIndex = random.nextInt(characters.length());
            char randomChar = characters.charAt(randomIndex);
            code.append(randomChar);
        }
        String accessKey = code.toString();
        if (collectionRepository.findByAccessKey(accessKey) != null) {
            accessKey = generateRandomCode();
        }
        return accessKey;
    }
}
