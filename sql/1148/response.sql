# Write your MySQL query statement below
SELECT
DISTINCT
w1.author_id AS id
FROM Views w1
WHERE w1.author_id = w1.viewer_id
ORDER BY w1.author_id ASC