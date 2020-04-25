CREATE DATABASE explorer_db;
USE explorer_db;

CREATE TABLE planets
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR (50),
    size DEC (10,3) NOT NULL,
    gas BOOLEAN DEFAULT false,
    color VARCHAR (30),
    PRIMARY KEY (id)
);