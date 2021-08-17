/**
 * Prompt:
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 *  https://leetcode.com/problems/majority-element/
 */

/**
 * @param {number[]} nums
 * @param {number}
 */
let nums = [3, 2, 3];

/**
 * Hashing would require extra space O(n) to store map, merge sort would be O(nlogn)
 *
 * Booyer Moore Algorithm
 *
 */

let majorityElement = (nums) => {
  let majorityNum = nums[0];
  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    // if count is every 0, assign the current number from nums to be the majorityNum
    if (count === 0) {
      majorityNum = nums[i];
    }
    // if the current number is equal to the majorityNum, increment count by 1, otherwise decrement
    count = nums[i] === majorityNum ? count + 1 : count - 1;
  }
  // return whichever number majorityNum is set too after having iterated
  return majorityNum;
};

// Super high efficiency! Faster than 97.37%
