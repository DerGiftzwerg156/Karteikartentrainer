package com.example.backend.service;

import com.example.backend.entity.CardType;
import com.example.backend.entity.Collection;
import com.example.backend.repositorys.StandardCardRepository;
import com.example.backend.entity.StandardCard;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StandardCardService {

    @Autowired
    private StandardCardRepository standardCardRepository;

    @Autowired
    private CardTypeService cardTypeService;

    public StandardCard createNewStandardCard(Collection collection, StandardCard standardCard) {
        StandardCard newCard = new StandardCard(collection, getStandardCardType(), standardCard.getQuestion(), standardCard.getAnswer());
        return standardCardRepository.save(newCard);
    }

    public void deleteStandardCard(Long id) {
        standardCardRepository.deleteById(id);
    }

    public StandardCard[] getAllStandardCardsByCollection(Collection collection) {
        List<StandardCard> standardCardList = standardCardRepository.findAllByCollection(collection);
        StandardCard[] standardCards = new StandardCard[standardCardList.size()];
        return standardCardList.toArray(standardCards);
    }

    public void deleteAllStandardCarsByCollection(Collection collection) {
        standardCardRepository.deleteAllByCollection(collection);
    }

    public StandardCard getByCardId(Long id) {
        return standardCardRepository.findById(id);
    }

    private CardType getStandardCardType() {
        return cardTypeService.getSpecificCardType("StandardCard");
    }


}
