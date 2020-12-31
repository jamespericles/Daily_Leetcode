/**
 * Prompt:
 *
 * Given an array of integers nums, sort the array in ascending order.
 *
 * Example :
 *
 *      Input: nums = [5,2,3,1]
 *      Output: [1,2,3,5]
 *
 * https://leetcode.com/problems/sort-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * this should be a fairly simple problem despite it being a medium level question
 * first thing to consider is that .sort() doesn't handle negative numbers properly
 *
 * first check should if to see if a negative number exists within the array
 *      if it doesn't we can save space and time by running .sort(), as without a negative, that will work properly
 *
 * if there are negatives, we'll need to extend on .sort() to handle negatives properly
 */
let nums = [-5, -2, 3];

let sortArray = (nums) => {
  // first evaluate if any number n within our array is < 0
  if (nums.some((n) => n < 0) === true) {
    return nums.sort(function (a, b) {
      return a - b;
    });
    // if there are no negatives, use .sort()
  } else {
    return nums.sort();
  }
};
