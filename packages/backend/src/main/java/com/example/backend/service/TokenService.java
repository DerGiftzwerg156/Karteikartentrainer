package com.example.backend.service;

import com.example.backend.entity.Token;
import com.example.backend.repositorys.TokenRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.sql.Timestamp;
import java.util.Base64;

@Service
@Transactional
public class TokenService {

    private static final SecureRandom secureRandom = new SecureRandom();
    private static final Base64.Encoder base64encoder = Base64.getUrlEncoder();

    @Autowired
    private TokenRepository tokenRepository;

    public Token getTokenById(Long id) {
        return tokenRepository.findById(id);
    }

    public Token createNewToken() {
        Token token = new Token(generateTokenString(), new Timestamp(System.currentTimeMillis()));
        return tokenRepository.save(token);
    }

    public boolean isTokenValid(long tokenId) {
        if (tokenRepository.findById(tokenId) != null) {
            Token token = tokenRepository.findById(tokenId);
            long actualTimestamp = new Timestamp(System.currentTimeMillis()).getTime();
            if ((token.getCreateTimestamp().getTime() + 3600000) > actualTimestamp) {
                return true;
            } else {
                tokenRepository.deleteById(token.getId());
                return false;
            }
        }
        return false;
    }

    public void deleteToken(long tokenId) {
        tokenRepository.deleteById(tokenId);
    }

    private static String generateTokenString() {
        byte[] bytes = new byte[24];
        secureRandom.nextBytes(bytes);
        return base64encoder.encodeToString(bytes);
    }
}
