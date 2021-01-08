/**
 * Prompt:
 *
 * An array is monotonic if it is either monotone increasing or monotone decreasing.
 *
 * An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].
 *
 * Return true if and only if the given array A is monotonic.
 *
 * Example:
 *
 *      Input: [1, 2, 2, 3]
 *      Output: true
 *
 * https://leetcode.com/problems/monotonic-array/
 */

/**
 * @param {number[]} A
 * @return {boolean}
 */

let A = [1, 2, 2, 3],
  B = [1, 3, 2];

let isMonotonic = (A) => {
  let increasing = true,
    decreasing = true;

  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
      increasing = false;
    }
    if (A[i] < A[i + 1]) {
      decreasing = false;
    }
  }
  return increasing || decreasing;
};
