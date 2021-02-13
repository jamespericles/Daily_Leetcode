/**
 * Prompt:
 *
 * Given an integer n, return true if it is a power of four. Otherwise, return
 * false.
 *
 * https://leetcode.com/problems/power-of-four/
 */

/**
 * @param {number} n
 * @return {boolean}
 */

let isPowerOfFour = (n) => {
  if (n <= 0) {
    return false;
  }

  let i = Math.log(n) / Math.log(4);

  return i == Math.floor(i);
};

/**
 * Slightly less efficient on time but more so on memory usage. Runtime of 100ms
 * (less than 55.68%) and memory usage of 40mb (less than 60.61%)
 */
