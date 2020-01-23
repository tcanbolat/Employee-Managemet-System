DROP DATABASE IF EXISTS ems_db;

CREATE DATABASE ems_db;

USE ems_db;

CREATE TABLE `employee` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`first_name` varchar(30) NOT NULL,
	`last_name` varchar(30) NOT NULL,
	`role_id` INT NOT NULL,
	`manager_id` INT,
	PRIMARY KEY (`id`)
);

CREATE TABLE `role` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`title` varchar(30) NOT NULL,
	`salary` DECIMAL(30) NOT NULL,
	`department_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `department` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`department` varchar(30) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `employee` ADD CONSTRAINT `employee_fk0` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`);

ALTER TABLE `employee` ADD CONSTRAINT `employee_fk1` FOREIGN KEY (`manager_id`) REFERENCES `employee`(`id`);

ALTER TABLE `role` ADD CONSTRAINT `role_fk0` FOREIGN KEY (`department_id`) REFERENCES `department`(`id`);


INSERT INTO department (department)
VALUES ("Sales"),
	   ("Finance"),
	   ("HR"),
	   ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager, Sales", 63000, 1),
	   ("Sales Rep", 34000, 1),
	   ("Manager, Finance", 68000, 2),
	   ("Accountant", 60000, 2),
	   ("manager HR", 50000, 3),
	   ("HR Rep", 32500, 3),
	   ("Manager, Engineering", 97000, 4),
	   ("Engineer", 68000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, NULL),
	   ("Steve", "Roland", 2, 1),
	   ("Ahmed", "Yusuf", 3, NULL),
	   ("Sarah", "Johansen", 4, 3),
	   ("Harold", "Little", 5, NULL),
	   ("Trevor", "Dune", 6, 5),
	   ("Hasan", "Demir", 7, NULL),
       ("Eugene", "Green", 8, 7),
	   ("Haile", "Hall", 4, 3),
	   ("Samir", "Rakesh", 2, 1);

	   