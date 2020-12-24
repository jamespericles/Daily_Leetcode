/*
 *  Prompt:
 *
 *    Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
 *
 *    If target is not found in the array, return [-1, -1].
 *
 *    Follow up: Could you write an algorithm with O(log n) runtime complexity?
 *
 *    https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

let nums = [5, 7, 7, 8, 8, 10],
  target = 8; // should return [3,4]

let searchRange = (nums, target) => {
  // fringe case where nums is empty
  if (nums.length === 0) {
    return [-1, -1];
  }

  // other fringe case where nums contains only one number, and handles whether that number is the target or not
  if (nums.length === 1 && nums.includes(target) === true) {
    return [0, 0];
  } else if (nums.includes(target) === false) {
    return [-1, -1];
  }

  // create variable to search for
  let bubble = [target, target];

  // first check if the target exists, if it doesn't, we can exit our function before looping
  let hasSubArray = (nums, bubble) => {
    return bubble.every(((i) => (v) => (i = nums.indexOf(v, i) + 1))(0));
  };

  if (hasSubArray(nums, bubble) === true) {
    // given the format of the question, we want the index of both targets
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  } else if (nums.includes(target) === true) {
    // fringe case handling for if nums.length === 2 but does contain target, we want to return the index of the single target in that case
    return [nums.indexOf(target), nums.lastIndexOf(target)];
  } else {
    return [-1, -1];
  }
};
