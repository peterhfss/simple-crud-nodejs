CREATE DATABASE crud_nodejs;

USE crud_nodejs;

CREATE TABLE users(
    id int(4) AUTO_INCREMENT,
    nome varchar(40) NOT NULL,
    email varchar(50),
    senha varchar(20),
    PRIMARY KEY (id)
);