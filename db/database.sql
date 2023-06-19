CREATE DATABASE IF NOT EXISTS companydb;
-- \c companydb
CREATE SEQUENCE employee_id_seq;
CREATE TABLE employee (
    id integer not null default nextval('employee_id_seq') primary key,
    name VARCHAR(45),
    salary INT
);


-- Create employee
INSERT INTO employee (name, salary) VALUES 
('Erick', 1000),
('Hector', 2000),
('Carlos', 3500),
('Mario', 300);


