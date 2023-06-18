package com.example.backend.requests;

import com.example.backend.entity.Collection;
import com.example.backend.entity.StandardCard;

public class NewStandardCardRequest {
    private Collection collection;
    private StandardCard standardCard;

    public NewStandardCardRequest(Collection collection, StandardCard standardCard) {
        this.collection = collection;
        this.standardCard = standardCard;
    }

    public Collection getCollection() {
        return collection;
    }

    public void setCollection(Collection collection) {
        this.collection = collection;
    }

    public StandardCard getStandardCard() {
        return standardCard;
    }

    public void setStandardCard(StandardCard standardCard) {
        this.standardCard = standardCard;
    }
}
