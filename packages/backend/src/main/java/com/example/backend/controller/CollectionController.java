package com.example.backend.controller;

import com.example.backend.Exceptions.UnauthorizedException;
import com.example.backend.entity.Collection;
import com.example.backend.entity.User;
import com.example.backend.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/collections")
public class CollectionController {

    @Autowired
    private CollectionService collectionService;

    @Autowired
    private TokenService tokenService;

    @Autowired
    private UserService userService;

    @PostMapping("/new")
    public ResponseEntity<Collection> createNewCollection(@RequestBody Collection collection, @RequestHeader(value = "Authorization") Long tokenId) {
        if (tokenService.isTokenValid(tokenId)) {
            Collection newCollection = collectionService.createCollection(collection);
            return new ResponseEntity<>(newCollection, HttpStatus.OK);
        } else throw new UnauthorizedException("Invalid Token!");
    }

    @GetMapping("/getByAccessKey")
    public ResponseEntity<Collection> getCollectionByAccessKey(@RequestHeader(value = "Authorization") String accessKey) {
        Collection collection = collectionService.getCollection(accessKey);
        return new ResponseEntity<>(collection, HttpStatus.OK);
    }

    @GetMapping("/getAllByUser")
    public ResponseEntity<Collection[]> getAllCollectionsByUser(@RequestHeader(value = "Authorization") Long tokenId) {
        if (tokenService.isTokenValid(tokenId)) {
            Collection[] collections = collectionService.getAllCollectionByUser(userService.getUserByToken(tokenId));
            return new ResponseEntity<>(collections, HttpStatus.OK);
        } else throw new UnauthorizedException("Invalid Token!");
    }

    @PostMapping("/delete")
    public void deleteCollection(@RequestBody Collection collection, @RequestHeader(value = "Authorization") Long tokenId) {
        if (tokenService.isTokenValid(tokenId)) {
            User user = userService.getUserByToken(tokenId);
            if (collection.getUser().getId() == user.getId()) {
                collectionService.deleteCollection(collection.getId());
            } else throw new UnauthorizedException("Invalid permissions!");
        } else throw new UnauthorizedException("Invalid Token!");
    }
}
