package com.example.backend.service;

import com.example.backend.entity.CardType;
import com.example.backend.repositorys.CardTypeRepository;
import com.example.backend.responses.StatusResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CardTypeService {

    @Autowired
    private CardTypeRepository cardTypeRepository;

    public CardType[] getAllCardTypes() {
        List<CardType> cardTypeList = (List<CardType>) cardTypeRepository.findAll();
        CardType[] cardTypes = new CardType[cardTypeList.size()];
        return cardTypeList.toArray(cardTypes);
    }

    public CardType getSpecificCardType(String name) {
        return cardTypeRepository.findByName(name);
    }
}
