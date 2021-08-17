/**
 * Prompt:
 *
 * Implement pow(x,n), which calculates x raised to the power n
 *
 * Example:
 *      Input: x = 2.00000, n = 10
 *      Output: 1024.00000
 *
 * https://leetcode.com/problems/powx-n/
 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

let myPow = (x, n) => {
  if (n === 0) {
    return 1.0;
  }

  return Math.pow(x, n);
};

/**
 * Not much to say here, this is the same solution that satisfied the Java version. Stats were a runtime
 * of 84ms (faster than 63.43%) and memory usage of 38.7mb (less than 89.86%). The recursive method I was
 * so excited to write before cannot handle decimals or negative numbers unfortunately, otherwise
 * it throws a maximum call stack size exceeded error.
 */
