/**
 * Prompt:
 *
 * Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 *
 * Return the running sum of nums.
 *
 *  https://leetcode.com/problems/running-sum-of-1d-array/
 */

/**
 * Params:
 *
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 *
 */

let nums = [1, 2, 3, 4]; // -> [1,3,6,10]

let runningSum = (nums) => {
  // sum is initialized to 0, everytime this function is called, sum is updated and will equal the previous value (output[n-1]) when called the next time (with input[n])
  // important to note this can only be ran for one array, as sum will retain its value after the first array
  let cummulator = ((sum) => (value) => (sum += value))(0);
  let output = nums.map(cummulator);
  return output;
};
// Highly efficient! Faster than %88.99 of submissions
