# Write your MySQL query statement below
SELECT
w1.name
,w1.population
,w1.area
FROM World w1
WHERE area >= 3000000 OR population >= 25000000
