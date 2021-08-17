/**
 * Prompt:
 *
 * Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j]
 *
 * and the absolute difference between i and j is at most k.
 *
 * Example:
 *
 *      Input: nums = [1, 2, 3, 1], k = 3
 *      Output: true
 *
 * https://leetcode.com/problems/contains-duplicate-ii/
 */

const { truncate } = require("fs");

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

let nums = [1, 2, 3, 1],
  k = 3;

let containsNearbyDuplicate = (nums, k) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // check if our map contains the number currently being iterated on, and if that number is less than or equal to k, return true
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true;
    }

    map.set(nums[i], i);
  }
  return false;
};

// Very high efficiency, faster than 98.40% of other submissions
