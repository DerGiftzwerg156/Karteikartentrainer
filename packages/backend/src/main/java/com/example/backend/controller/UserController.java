package com.example.backend.controller;

import com.example.backend.entity.Token;
import com.example.backend.entity.User;
import com.example.backend.requests.ActivateAccountRequest;
import com.example.backend.requests.LoginRequest;
import com.example.backend.requests.UpdatePasswordRequest;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/createNew")
    public ResponseEntity<User> createNewUser(@RequestBody User user) {
        User newUser = userService.createNewUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }

    @PostMapping("/updatePassword")
    public boolean updatePassword(@RequestBody UpdatePasswordRequest updatePasswordRequest, @RequestHeader(value = "Authorization") Long tokenId) {
        return userService.updatePassword(updatePasswordRequest, tokenId);
    }

    @DeleteMapping("/deleteUser")
    public void deleteUser( @RequestHeader(value = "Authorization") Long tokenId){
        userService.deleteUser(tokenId);
    }

    @GetMapping("/getUserByToken")
    public ResponseEntity<User> getUserByToken(@RequestHeader(value = "Authorization") Long tokenId){
        User user = userService.getUserByToken(tokenId);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<User> loginUser(@RequestBody LoginRequest loginRequest){
        User user = userService.loginUser(loginRequest);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }

    @PostMapping("/verifyAccount")
    public boolean verifyAccount(@RequestBody ActivateAccountRequest activateAccountRequest){
        return userService.verifyAccount(activateAccountRequest);
    }

    @PostMapping("/logout")
    public void logout(@RequestBody Token token){
        userService.logoutUser(token.getId());
    }
}
