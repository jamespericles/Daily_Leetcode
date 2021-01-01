/**
 * Prompt:
 *
 * Given an array of integers arr, return true if and only if it is a valid mountain array.
 *
 * Recall that arr is a mountain array if and only if:
 *
 * arr.length >= 3
 * There exists some i with 0 < i < arr.length - 1 such that:
 *      arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
 *      arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 *
 * Example:
 *
 *      Input: arr = [0,3,2,1]
 *      Output: true
 *
 * https://leetcode.com/problems/valid-mountain-array/
 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */

let valid = [0, 3, 2, 1],
  invalid = [3, 5, 5];

let validMountainArray = (arr) => {
  let len = arr.length,
    i = 0,
    j = len - 1;

  for (i = 0; i < j; i++) {
    if (arr[i] >= arr[i + 1]) {
      break;
    }
  }
  if (i == 0 || i == j) return false;

  for (j = len - 1; j > 0; j--) {
    if (arr[j - 1] <= arr[j]) {
      break;
    }
  }
  if (j == 0 || j == len - 1) return false;

  return i == j ? true : false;
};
