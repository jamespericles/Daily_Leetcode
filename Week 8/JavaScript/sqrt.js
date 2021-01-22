/**
 * Prompt:
 *
 * Given a non-negative integer x, compute and return the square root of x.
 *
 * Since the return type is an integer, the decimal digits are truncated, and
 * only the integer part of the result is returned.
 *
 * https://leetcode.com/problems/sqrtx/
 */

/**
 * @param {number} x
 * @return {number}
 */

let mySqrt = (x) => {
  return Math.floor(Math.sqrt(x));
};

/**
 * Similar sentiment to my Java solution, this one is deceptively easy. The only
 * difference here was the inclusion of Math.floor to round the answer down
 * rather than up. Runtime of 96ms (faster than 74.46%) and memory usage of
 * 40mb (less than 42.86%).
 */
