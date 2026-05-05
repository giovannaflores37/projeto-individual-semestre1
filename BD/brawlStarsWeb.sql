CREATE DATABASE brawlWeb;
USE brawlWeb;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nomeUsuario VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);
