package com.example.backend.entity;

import javax.persistence.*;

@Entity
@Table(name="card_type")
public class CardType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "card_type_id", nullable = false)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @Column(name = "description",nullable = false)
    private String description;

    public CardType() {
    }

    public CardType(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
