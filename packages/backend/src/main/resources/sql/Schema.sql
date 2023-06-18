CREATE TABLE IF NOT EXISTS token
(
    token_id         INTEGER     NOT NULL AUTO_INCREMENT,
    token            varchar(50) NOT NULL,
    create_timestamp TIMESTAMP   NOT NULL,
    PRIMARY KEY (token_id)
);

CREATE TABLE IF NOT EXISTS user
(
    user_id           INTEGER      NOT NULL AUTO_INCREMENT,
    mail              varchar(500) NOT NULL,
    password          varchar(100) NOT NULL,
    verified          boolean      NOT NULL,
    verification_code int,
    token_id          INTEGER,
    PRIMARY KEY (user_id),
    FOREIGN KEY (token_id) REFERENCES token (token_id)
);

CREATE TABLE IF NOT EXISTS collection
(
    collection_id INTEGER      NOT NULL AUTO_INCREMENT,
    user_id       INTEGER      NOT NULL,
    access_key    varchar(8)          NOT NULL,
    name          varchar(50)  NOT NULL,
    description   varchar(500) NOT NULL,
    PRIMARY KEY (collection_id),
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE IF NOT EXISTS card_type
(
    card_type_id INTEGER     NOT NULL AUTO_INCREMENT,
    name         varchar(500) NOT NULL,
    description  varchar(500) NOT NULL,
    PRIMARY KEY (card_type_id)
);

INSERT INTO card_type (name, description)
Values ('StandardCard', 'Eine Einfache Frage welche eine Textfrage als Antwort erwartet'),
       ('MultipleChoice','Eine Multiple Choice Frage, welche eine oder mehrere Antwortmöglichkeiten hat');

CREATE TABLE IF NOT EXISTS standard_card
(
    card_id       INTEGER      NOT NULL AUTO_INCREMENT,
    collection_id INTEGER      NOT NULL,
    type_id       INTEGER      NOT NULL,
    question      varchar(500) NOT NULL,
    answer        varchar(500) NOT NULL,
    PRIMARY KEY (card_id),
    FOREIGN KEY (collection_id) REFERENCES collection (collection_id),
    FOREIGN KEY (type_id) REFERENCES card_type (card_type_id)
);

CREATE TABLE IF NOT EXISTS multiple_choice_question
(
    multiple_choice_question_id INTEGER      NOT NULL AUTO_INCREMENT,
    collection_id               INTEGER      NOT NULL,
    type_id                     INTEGER      NOT NULL,
    question                    varchar(500) NOT NULL,
    PRIMARY KEY (multiple_choice_question_id),
    FOREIGN KEY (collection_id) REFERENCES collection (collection_id),
    FOREIGN KEY (type_id) REFERENCES card_type (card_type_id)
);

CREATE TABLE IF NOT EXISTS multiple_choice_answer
(
    multiple_choice_answer_id   INTEGER      NOT NULL AUTO_INCREMENT,
    multiple_choice_question_id INTEGER      NOT NULL,
    answer                      varchar(500) NOT NULL,
    is_right                    boolean      NOT NULL,
    PRIMARY KEY (multiple_choice_answer_id),
    FOREIGN KEY (multiple_choice_question_id) REFERENCES multiple_choice_question (multiple_choice_question_id)
);

