CREATE DATABASE IF NOT EXISTS pets_db;
​
USE pets_db;
​
CREATE TABLE `owners` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`phone_number` INT NOT NULL,
	PRIMARY KEY (`id`)
);
​
CREATE TABLE `pets` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`type` varchar(255) NOT NULL,
	`breed` varchar(255) NOT NULL,
    `gender`varchar(255) NOT NULL,
	`name` varchar(255) NOT NULL,
	`age` INT NOT NULL,
	`owner_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);
​
ALTER TABLE `pets` ADD CONSTRAINT `pets_fk0` FOREIGN KEY (`owner_id`) REFERENCES `owners`(`id`);




USE pets_db;
​
INSERT INTO `owners`(first_name, last_name, phone_number) VALUES
('Mark', 'Steadman', 123456789),
('Abdullah', 'Canbolat', 123456789),
('John', 'Smith', 123456789);
​
INSERT INTO `pets`(type, breed, gender, name, age, owner_id) VALUES
('dog', 'dachshund', 'female', 'honey', 9, 1),
('dog', 'kangal', 'male', 'efe', 9, 2),
('cat', 'tabby', 'female', 'april', 5, 3),
('dog', 'german shepherd', 'male', 'charlie', 6, 1);



USE pets_db;
​
SELECT
owners.id, owners.first_name, owners.last_name, pets.type, pets.breed, pets.gender, pets.name, pets.age
FROM owners JOIN pets ON (owners.id = pets.owner_id)
WHERE pets.gender = 'male' AND pets.age < 8;