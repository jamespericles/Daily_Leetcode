/**
 * Prompt:
 *
 * Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray).
 *
 * The subsequence must be strictly increasing. A continuous increasing subsequence is defined by two indices l and r (l < r)
 * such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].
 *
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 */

let nums = [1, 2, 5, 4, 7];

/**
 * @param {number[]} nums
 * @param 0 <= nums.length <= 10^4
 * @param -10^9 <= nums[i] <= 10^9
 */

let findLengthOfLCIS = (nums) => {
  // fringe case handling
  if (nums.length < 2) return nums.length;

  // initiate count at 1, max to be -Infinity (or 0, either or)
  let count = 1,
    max = -Infinity;

  // we stop our loop before the end of nums because we don't need to compare the last digit with nothing
  for (let i = 0; i < nums.length - 1; i++) {
    // if i < the next number, we iterate count, otherwise set count to be 1 and max to be whichever is highest between count and max (incase we have a fairly long array and a competing highest count)
    if (nums[i] < nums[i + 1]) count++;
    else count = 1;
    max = Math.max(max, count);
  }
  return max;
};
