CREATE TABLE user (
id INT NOT NULL AUTO_INCREMENT,
username varchar(50) NOT NULL,
password varchar(50) NOT NULL,
PRIMARY KEY (id)
) ;

CREATE TABLE country (
id INT NOT NULL AUTO_INCREMENT,
name varchar(50) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE city (
id INT NOT NULL AUTO_INCREMENT,
countryId INT NOT NULL,
name varchar(50) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (countryId) REFERENCES country(id)
);

CREATE TABLE address (
id INT NOT NULL AUTO_INCREMENT,
cityId int NOT NULL,
street varchar(50) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (cityId) REFERENCES city(id)
);


CREATE TABLE profile (
id INT NOT NULL AUTO_INCREMENT,
userId INT NOT NULL,
addressId  INT NOT NULL,
name varchar(50) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (userId) REFERENCES user(id),
FOREIGN KEY (addressId) REFERENCES address(id)
) ;