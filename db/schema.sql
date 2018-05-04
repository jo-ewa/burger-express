DROP DATABASE IF EXISTS burgersdb;
CREATE DATABASE burgersdb;
USE burgersdb;
CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
    )