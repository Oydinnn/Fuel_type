-- Active: 1755596838065@@127.0.0.1@3306@cheap_fuel
CREATE DATABASE cheap_fuel

USE cheap_fuel

SHOW TABLES

DESC fuel_types

CREATE TABLE fuel_types(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);


CREATE TABLE gas_station(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE gas_station_fuel_type(
    id INT AUTO_INCREMENT PRIMARY KEY,
    gas_station_branch_id INT NOT NULL,
    fuel_type_id INT NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    is_exists BOOLEAN NOT NULL,

    FOREIGN KEY(gas_station_branch_id)
    REFERENCES gas_station_branch(id),

    FOREIGN KEY(fuel_type_id) 
    REFERENCES fuel_types(id)
);

CREATE TABLE gas_station_branch(
    id INT AUTO_INCREMENT PRIMARY KEY,
    gas_station_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    location VARCHAR(255) NOT NULL,
    phone_number VARCHAR(255) NOT NULL,
    FOREIGN KEY(gas_station_id) 
    REFERENCES gas_station(id)
);

SHOW TABLES
