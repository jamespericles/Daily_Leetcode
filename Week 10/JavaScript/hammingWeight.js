/**
 * Prompt:
 *
 * Write a function that takes an unsigned integer and returns the number of '1'
 * bits it has (also known as the Hamming weight).
 *
 * https://leetcode.com/problems/number-of-1-bits/
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */

let hammingWeight = (n) => {
  let binary = n.toString(2),
    count = 0;

  for (let i = 0; i < binary.length; i++) {
    console.log(binary[i]);
    if (binary[i] == 1) {
      count += 1;
    }
  }
  return count;
};

/**
 * Similarly poor results, runtime of 164ms (faster than 5.55%) and memory usage of
 * 46.7mb (less than 6.24%)
 */
