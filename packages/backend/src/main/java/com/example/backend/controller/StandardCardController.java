package com.example.backend.controller;


import com.example.backend.entity.StandardCard;
import com.example.backend.service.StandardCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/standardCard")
public class StandardCardController {

    @Autowired
    private StandardCardService standardCardService;

    @GetMapping("/getAll")
    private ResponseEntity<StandardCard[]> getAllStandardCards() {
        StandardCard[] standardCards = standardCardService.getAllStandardCards();
        return new ResponseEntity<>(standardCards, HttpStatus.OK);
    }


}
