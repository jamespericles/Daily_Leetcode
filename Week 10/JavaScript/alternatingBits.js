/**
 * Prompt:
 *
 * Given a positive integer, check whether it has alternating bits: namely, if two
 * adjacent bits will always have different values.
 *
 * https://leetcode.com/problems/binary-number-with-alternating-bits/
 */

/**
 * @param {number} n
 * @return {boolean}
 */

let hasAlternatingBits = (n) => {
  let binary = n.toString(2);
  console.log(binary);

  if (binary.includes("11") || binary.includes("00")) {
    return false;
  } else {
    return true;
  }
};

/**
 * I was initially over-complicating this by looping over the binary string
 * searching for any occurrence of non alternating bits before remembering
 * about the .includes method. Runtime of 88ms (faster than 28.18%)
 * and memory usage of 40.3mb (less than 5.45%)
 */
