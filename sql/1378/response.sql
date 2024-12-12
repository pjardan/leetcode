-- Write your PostgreSQL query statement below


SELECT
w2.unique_id,
w1.name
FROM Employees w1
LEFT JOIN EmployeeUNI w2 ON w1.id = w2.id;


-- Write your PostgreSQL query statement below
SELECT unique_id, name FROM EmployeeUNI RIGHT JOIN Employees using(id);