package com.example.backend.controller;

import com.example.backend.Exceptions.UnauthorizedException;
import com.example.backend.entity.StandardCard;
import com.example.backend.entity.Token;
import com.example.backend.entity.User;
import com.example.backend.requests.NewStandardCardRequest;
import com.example.backend.service.CollectionService;
import com.example.backend.service.StandardCardService;
import com.example.backend.service.TokenService;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/api/standardCard")
public class StandardCardController {

    @Autowired
    private StandardCardService standardCardService;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserService userService;

    @Autowired
    private CollectionService collectionService;

    @PostMapping("/createNew")
    public ResponseEntity<StandardCard> createNewStandardCard(@RequestBody NewStandardCardRequest newStandardCardRequest, @RequestHeader(value = "Authorization") Long tokenId) {
        if (tokenService.isTokenValid(tokenId)) {
            StandardCard standardCard = standardCardService.createNewStandardCard(newStandardCardRequest.getCollection(), newStandardCardRequest.getStandardCard());
            return new ResponseEntity<>(standardCard, HttpStatus.OK);
        } else throw new UnauthorizedException("Invalid Token");
    }

    @PostMapping("/delete")
    public void deleteStandardCard(@RequestBody Long id, @RequestHeader(value = "Authorization") Long tokenId) {
        if (tokenService.isTokenValid(tokenId)) {
            User user = userService.getUserByToken(tokenId);
            if (standardCardService.getByCardId(id).getCollection().getUser().getId() == user.getId()) {
                standardCardService.deleteStandardCard(id);
            } else throw new UnauthorizedException("Invalid permissions");
        } else throw new UnauthorizedException("Invalid Token");
    }

    @GetMapping("/getAllByCollection")
    public ResponseEntity<StandardCard[]> getAllStandardCardsByCollection(@RequestHeader(value = "Authorization") Long collectionId) {
        StandardCard[] standardCards = standardCardService.getAllStandardCardsByCollection(collectionService.getCollectionById(collectionId));
        return new ResponseEntity<>(standardCards, HttpStatus.OK);
    }
}
