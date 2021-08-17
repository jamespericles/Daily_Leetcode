/**
 * Prompt:
 *
 * In an array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
 *
 * Return the element repeated N times.
 *
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */

let repeatedNTimes = (A) => {
  A.sort();
  let output;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] === A[i + 1]) {
      output = A[i];
      break;
    }
  }
  return output;
};

/**
 * I thought to add a break statement while writing this solution, which will allow for there to be
 * at least a chance to improve efficiency if the repeated element appears early in the Array.
 * This only works because we know there will only ever be one repeated array. Stats are as follows:
 * runtime of 112ms (faster than 24.22%) and memory usage of 42.9mb (less than 37.31%).
 */
