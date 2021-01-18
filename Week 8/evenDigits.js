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

//

let findNumbers = (nums) => {
  output = 0;

  for (let i = 0; i < nums.length; i++) {
    // we only care if the length of the value at the index is even, not the value itself
    if (Math.ceil(Math.log(nums[i] + 1) / Math.LN10) % 2 === 0) {
      output++;
    }
  }
  return output;
};
