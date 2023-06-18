package com.example.backend.controller;

import com.example.backend.entity.CardType;
import com.example.backend.service.CardTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cardType")
public class CardTypeController {

    @Autowired
    private CardTypeService cardTypeService;

    @GetMapping("/getAll")
    public ResponseEntity<CardType[]> getAllCardTypes() {
        CardType[] cardTypes = cardTypeService.getAllCardTypes();
        return new ResponseEntity<>(cardTypes, HttpStatus.OK);
    }
}
