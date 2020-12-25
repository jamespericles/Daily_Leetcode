/**
 * Prompt:
 *
 * Given an integer array nums where every element appears three times except for one, which appears exactly once.
 * Find the single element and return it.
 *
 * https://leetcode.com/problems/single-number-ii/
 */

let nums = [2, 2, 3, 2]; // should return 3

let singleNumber = (nums) => {
  const map = new Map();

  for (let n of nums) map.set(n, (map.get(n) || 0) + 1);
  for (let [key, val] of map) if (val === 1) return key;
};
