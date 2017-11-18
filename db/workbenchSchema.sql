### Schema

CREATE DATABASE burgers_db;
DROP DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
    burger_name varchar (30) NOT NULL,
    devoured boolean,
    date timestamp,
	PRIMARY KEY (id)
);

-- Inserted a set of records into the table burgers in burgers_db
USE burgers_db;

INSERT INTO burgers (burger_name, devoured) VALUES ('Tuna Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('funky fresh burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('veggie aka not a burger', FALSE);

SELECT * FROM burgers;
