package com.example.backend.controller;

import com.example.backend.Exceptions.UnauthorizedException;
import com.example.backend.entity.Collection;
import com.example.backend.requests.NewMultipleChoiceRequest;
import com.example.backend.responses.MultipleChoiceQuestionResponse;
import com.example.backend.service.CollectionService;
import com.example.backend.service.MultipleChoiceService;
import com.example.backend.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/multipleChoice")
public class MultipleChoiceController {

    @Autowired
    private MultipleChoiceService multipleChoiceService;

    @Autowired
    private CollectionService collectionService;

    @Autowired
    private TokenService tokenService;

    @PostMapping("/newQuestion")
    public boolean createNewMultipleChoiceQuestion(@RequestBody NewMultipleChoiceRequest newMultipleChoiceRequest, @RequestHeader(value = "Authorization") Long tokenId) {
        if (tokenService.isTokenValid(tokenId)) {
            Collection collection = collectionService.getCollectionById(newMultipleChoiceRequest.getCollection().getId());
            return multipleChoiceService.createNewMultipleChoiceQuestion(collection, newMultipleChoiceRequest);
        } else throw new UnauthorizedException("Invalid Token!");
    }

    @GetMapping("/getByCollection")
    public ResponseEntity<MultipleChoiceQuestionResponse[]> getAllMultipleChoiceByCollection(@RequestHeader(value = "Authorization") Long collectionId) {
        Collection collection = collectionService.getCollectionById(collectionId);
        MultipleChoiceQuestionResponse[] multipleChoiceQuestionResponses = multipleChoiceService.getAllMultipleChoiceCardsByCollection(collection);
        return new ResponseEntity<>(multipleChoiceQuestionResponses, HttpStatus.OK);
    }

    @PostMapping("/deleteSingleQuestion")
    public void deleteSingleQuestion(@RequestBody Long questionId, @RequestHeader(value = "Authorization") Long tokenId) {
        if (tokenService.isTokenValid(tokenId)) {
            multipleChoiceService.deleteQuestion(questionId);
        } else throw new UnauthorizedException("Invalid Token");
    }
}
