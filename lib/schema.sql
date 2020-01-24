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