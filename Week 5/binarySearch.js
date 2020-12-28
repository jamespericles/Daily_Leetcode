/**
 * Prompt:
 *
 * Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums.
 *
 * If target exists, then return its index, otherwise return -1.
 *
 * https://leetcode.com/problems/binary-search/
 */

/**
 * @param {number[]} nums
 * @param all numbers in nums are unique
 * @param 1 <= n <= 10000
 * @param -9999 <= nums[i] <= 9999
 */

let nums = [-1, 0, 3, 5, 9, 12],
  target = 9;

let search = (nums, target) => {
  // nums will always be sorted from least to greatest, no need to sort them before searching
  // first check if target exists in the array, return -1 otherwise
  if (nums.includes(target) === false) {
    return -1;
  }
  // define our callback function for future use of .findIndex
  const isTarget = (element) => element === target;
  // on each element, we evaluate whether the element is equal to the target.
  // If this value is truthy, we return that index, otherwise we continue to iterate through the array
  return nums.findIndex(isTarget);
};
