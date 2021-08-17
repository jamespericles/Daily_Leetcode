/**
 * Prompt:
 *
 * Given an integer n, return true if it is a power of three. Otherwise, return false.
 *
 * An integer n is a power of three, if there exists an integer x such that n == 3x.
 *
 * https://leetcode.com/problems/power-of-three/
 */

/**
 * @param {number} n
 * @return {boolean}
 */

let n = 27,
  m = 45;

let isPowerOfThree = (n) => {
  return 0 < n && 3 ** 33 % n === 0;
};
