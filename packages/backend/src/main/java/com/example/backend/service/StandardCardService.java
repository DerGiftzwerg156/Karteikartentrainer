package com.example.backend.service;

import com.example.backend.repositorys.StandardCardRepository;
import com.example.backend.entity.StandardCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StandardCardService {

    @Autowired
    private StandardCardRepository standardCardRepository;

    public StandardCard[] getAllStandardCards() {
        List<StandardCard> standardCardList = (List<StandardCard>) standardCardRepository.findAll();
        StandardCard[] standardCards = new StandardCard[standardCardList.size()];
        standardCardList.toArray(standardCards);
        return standardCards;
    }
}
