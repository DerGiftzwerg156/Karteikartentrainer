package com.example.backend.service;

import com.example.backend.Exceptions.UnauthorizedException;
import com.example.backend.Exceptions.UserAlreadyExistException;
import com.example.backend.entity.Token;
import com.example.backend.entity.User;
import com.example.backend.repositorys.UserRepository;
import com.example.backend.requests.ActivateAccountRequest;
import com.example.backend.requests.LoginRequest;
import com.example.backend.requests.UpdatePasswordRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;
import java.util.Random;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    public User createNewUser(User user) {
        if (userRepository.findByMail(user.getMail()) == null) {
            User newUser = new User(user.getMail(), hashPassword(user.getPassword()), generateVerificationCode());
            return userRepository.save(newUser);
        } else {
            throw new UserAlreadyExistException("Diese Mail wird bereits verwendet!");
        }
    }

    public boolean updatePassword(UpdatePasswordRequest updatePasswordRequest, Long tokenId) {
        if (isAuthenticated(tokenId)) {
            User user = userRepository.findByToken(tokenService.getTokenById(tokenId));
            if (user.getPassword().equals(hashPassword(updatePasswordRequest.getOldPassword()))) {
                user.setPassword(hashPassword(updatePasswordRequest.getNewPassword()));
                userRepository.save(user);
                return true;
            } else throw new UnauthorizedException("Password is not matching with old Password");
        } else {
            throw new UnauthorizedException("Invalid Token");
        }
    }

    public void deleteUser(Long tokenId) {
        if (isAuthenticated(tokenId)) {
            userRepository.deleteByToken(tokenService.getTokenById(tokenId));
        } else {
            throw new UnauthorizedException("Invalid Token");
        }
    }

    public User getUserByToken(Long tokenId) {
        if (isAuthenticated(tokenId)) {
           return userRepository.findByToken(tokenService.getTokenById(tokenId));
        } else throw new UnauthorizedException("Invalid Token");
    }

    public User loginUser(LoginRequest loginRequest) {
        if (userRepository.findByMail(loginRequest.getMail()) != null) {
            User user = userRepository.findByMail(loginRequest.getMail());
            if (user.isVerified() && user.getPassword().equals(hashPassword(loginRequest.getPassword()))) {
                Token token = tokenService.createNewToken();
                user.setToken(token);
                return userRepository.save(user);
            }
            throw new UnauthorizedException("Passwort oder Email falsch");
        }
        throw new UnauthorizedException("Passwort oder Email falsch");
    }

    public boolean verifyAccount(ActivateAccountRequest activateAccountRequest) {
        User user = userRepository.findByMail(activateAccountRequest.getMail());
        if (user != null) {
            user.setVerified(true);
            user.setVerificationCode(0);
            userRepository.save(user);
            return true;
        }
        throw new UnauthorizedException("Kein User mit Verification Code gefunden");
    }

    public void logoutUser(Long tokenId) {
        tokenService.deleteToken(tokenId);
    }


    private int generateVerificationCode() {
        Random rand = new Random();
        return rand.nextInt((999999 - 100000) + 1) + 100000;
    }

    private static String hashPassword(String password) {
        MessageDigest digest;
        try {
            digest = MessageDigest.getInstance("SHA-256");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
        byte[] hash = digest.digest(password.getBytes(StandardCharsets.UTF_8));
        return Base64.getEncoder().encodeToString(hash);
    }

    private boolean isAuthenticated(Long tokenId) {
        return tokenService.isTokenValid(tokenId);
    }
}
