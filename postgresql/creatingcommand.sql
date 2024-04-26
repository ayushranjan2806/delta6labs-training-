CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department VARCHAR(100),
    empid NUMERIC(10, 2)
);

INSERT INTO employees (name, department, salary)
VALUES ('ayush ranjan', 'Associate Software Developer', 200001212);

SELECT * FROM employees;

UPDATE employees
SET salary = 60000
WHERE name = 'ayush ranjan';

ALTER TABLE employees
ADD COLUMN email VARCHAR(255);

DELETE FROM employees
WHERE name = 'ayush ranjan';

DROP TABLE employees;


