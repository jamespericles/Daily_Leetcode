/**
 * Prompt:
 *
 * Given an array nums of integers, return how many of them contain an even number of digits.
 *
 * Example:
 *      Input: nums = [555, 901, 482, 1771]
 *      Output: 1
 *      Explanation: Only nums[3] has an even number of digits
 *
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

let nums = [12, 345, 2, 6, 7896];

let findNumbers = (nums) => {
  output = 0;

  for (let i = 0; i < nums.length; i++) {
    // we only care if the length of the value at the index is even, not the value itself
    if (nums[i].toString().length % 2 === 0) {
      output++;
    }
  }
  return output;
};

/* 
    Above works, but we lose a lot of efficiency by converting the index to a string to access its length.
    Current stats are runtime of 168 ms and 47.6 mb

    *** EDIT: I reran the above solution and had a runtime of 80ms (faster than 78.76%) and 39.3 mb (less than 57.57%) Perhaps my internet was slow first upload? 
*/

let findNumbers = (nums) => {
  output = 0;

  for (let i = 0; i < nums.length; i++) {
    // different, slighter better way to find the length of the integer without converting to a string first
    if (Math.ceil(Math.log(nums[i] + 1) / Math.LN10) % 2 === 0) {
      output++;
    }
  }
  return output;
};

/* 
      This refactor is slightly better, runtime of 88ms (faster than 25.15%) and 38.8mb (less than 93.63%)
*/
