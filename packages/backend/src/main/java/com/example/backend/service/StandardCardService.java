package com.example.backend.service;

import com.example.backend.entity.CardType;
import com.example.backend.entity.Collection;
import com.example.backend.repositorys.StandardCardRepository;
import com.example.backend.entity.StandardCard;
import com.example.backend.requests.NewStandardCardRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class StandardCardService {

    @Autowired
    private StandardCardRepository standardCardRepository;

    @Autowired
    private CardTypeService cardTypeService;

    @Autowired
    private CollectionService collectionService;

    public StandardCard createNewStandardCard(NewStandardCardRequest newStandardCardRequest) {
        StandardCard newCard = new StandardCard(collectionService.getCollectionById(newStandardCardRequest.getCollection().getId()), getStandardCardType(), newStandardCardRequest.getQuestion(), newStandardCardRequest.getAnswer());
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
