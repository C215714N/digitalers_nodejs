/* DDL (DATA DEFINITION LANGUAGE)*/
DROP DATABASE IF EXISTS animations; -- eliminacion db si existe
CREATE DATABASE IF NOT EXISTS animations; -- creacion db
USE animations; -- seleccion de db

CREATE TABLE colors(
	id INT AUTO_INCREMENT,
    name VARCHAR(20),
    PRIMARY KEY(id), -- clave principal (UNICO)
    UNIQUE KEY(name) -- clave unica (IRREPETIBLE)
);
CREATE TABLE species(
	id INT AUTO_INCREMENT,
    name VARCHAR(50),
    PRIMARY KEY(id),
    UNIQUE KEY(name)
);
CREATE TABLE characters(
	id INT AUTO_INCREMENT,
    name VARCHAR(80),
    color_id INT,
    specie_id INT,
    PRIMARY KEY(id),
    UNIQUE KEY(name, color_id, specie_id),
    FOREIGN KEY(color_id) REFERENCES colors(id), -- CLAVE EXTERNA
    FOREIGN KEY(specie_id) REFERENCES species(id) -- CLAVE EXTERNA
);

/* DML(DATA MANIPULATION LANGUAGE)*/

INSERT INTO colors(name) 
VALUES 
	("rojo"),
    ("azul"),
    ("verde"),
    ("amarillo"),
    ("blanco"),
    ("negro"),
    ("marron"),
    ("rosa"),
    ("naranja");

INSERT INTO species(name)
VALUES 
	("leon"),
    ("dinosaurio"),
    ("gato"),
    ("perro"),
    ("erizo");

INSERT INTO characters(name, color_id, specie_id)
VALUES
	("sonic", 2, 5),
	("kimba", 5, 1),
	("barney", 8, 2),
	("garfield", 9, 3),
	("clifford", 1, 4);

UPDATE characters SET
	color_id = 7, -- marron
    name = "simba"
WHERE id = 2; -- originalmente KIMBA

SELECT 
	ch.name AS charname,
    s.name AS specie,
    c.name AS color
FROM characters AS ch
JOIN colors AS c ON c.id = ch.color_id
JOIN species AS s ON s.id = ch.specie_id;

/* DCL (DATA CONTROL LANGUAGE) */
CREATE USER "digitalers"@"localhost" -- creacion de usuario en servidor
IDENTIFIED BY "P4ss"; -- contraseña 

GRANT ALL PRIVILEGES -- control total (DDL - DML)
ON animations.* -- todas las tablas
TO "digitalers"@"localhost"; -- usuario designado