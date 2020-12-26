/*
    Prompt:

    Write a SQL query to delete all duplicate email entries in a table named Person, keeping only unique emails based on its smallest Id.

    +----+------------------+
    | Id | Email            |
    +----+------------------+
    | 1  | john@example.com |
    | 2  | bob@example.com  |
    | 3  | john@example.com |
    +----+------------------+
    Id is the primary key column for this table.

    https://leetcode.com/problems/delete-duplicate-emails/
*/


DELETE FROM Person 
WHERE Id NOT IN
(SELECT * FROM (SELECT Min(Id) FROM Person GROUP BY Email) as Result);