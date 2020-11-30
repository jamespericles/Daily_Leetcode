/* Prompt:

Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].
 

Constraints:

0 <= low <= high <= 10^9

https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/

*/

// This solution reaches a runtime error when given low = 800,445,804 and high = 979,430,543 unfortunately but seems to work with other values for low and high

let low = 3,
  high = 7;

let countOdds = (low, high) => {
  // create empty array to push values into later
  list = [];
  // iterate using i, start at low, end at high, and push each value to list
  for (let i = low; i <= high; i++) {
    list.push(i);
  }

  // create new array where we'll push the odd values from list
  odds = [];

  // iterate over the established list array, using a modulus % operator is a simple way to test if a given number is odd
  // if that number is odd, we'll push it to our odds array
  for (let i = 0; i <= list.length; i++) {
    if (list[i] % 2 == 1) {
      odds.push(list[i]);
    }
  }

  //leetcode wants the amount of odd numbers, not the numbers themselves returned
  return odds.length;
};

/*
This file includes a method to 
    - create an array of all numbers between two given values
    - iterate over an array to return only odd numbers utilizing a modulus operator
*/
