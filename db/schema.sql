    -- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE burgers_db;

USE burgers_db

-- Created the table "schools" 
CREATE TABLE burgers 
(
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  date TIMESTAMP,
  PRIMARY KEY(id)
);

-- Inserted a set of records into the table
INSERT INTO burgers (burger_name, devoured) VALUES ("CheesBurger", TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ("BaconBurger", FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ("AvocadoBurger", TRUE);
INSERT INTO burgers (burger_name, devoured) VALUES ("OnionBurger", FALSE);


