/**
 * Prompt:
 *
 * Reverse bits of a given 32 bits unsigned integer.
 *
 * https://leetcode.com/problems/reverse-bits/
 */

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

let reverseBits = (n) => {
  const bits = n.toString(2).padStart(32, "0").split("").reverse().join("");
  return parseInt(bits, 2);
};

/**
 * Not the greatest stats here either. Runtime of 120ms (faster than 8.42%) and memory usage of 40.5mb (less than 44.13%)
 */
