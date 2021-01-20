/**
 * Prompt:
 *
 * Given two binary strings a and b, return their sum as a binary string.
 *
 * https://leetcode.com/problems/add-binary/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/**
 * Fairly simple solution. We use both inputs to build binary literals, calculate their sum using the BigInt function,
 * then returning the sum with a .toString() call to satisfy the expected return parameters.
 */

let addBinary = (a, b) => {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin);
  return sum.toString(2);
};

/**
 * Fantastic results, 80 ms (faster than 94.59%) and 38.9mb of memory (less than 96.37%).
 */
