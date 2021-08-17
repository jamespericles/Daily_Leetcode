/*
    Prompt: 

    Write a SQL query to get the second highest salary form the Employee table.

    https://leetcode.com/problems/second-highest-salary/
*/

SELECT MAX(Salary) as SecondHighestSalary 
    from Employee 
    where Salary not in (SELECT MAX(Salary) from Employee)