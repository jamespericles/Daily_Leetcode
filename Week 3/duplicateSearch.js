/* 
    Prompt:
    
    Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

    There is only one duplicate number in nums, return this duplicate number.

    https://leetcode.com/problems/find-the-duplicate-number/

    Baby's first medium level difficulty!
*/

let nums = [1, 3, 4, 2, 2];

let findDuplicate = (nums) => {
  // Sort array first for future comparison
  nums.sort();

  // Define a variable where we'll store our duplicates
  let results = [];

  for (let i = 0; i < nums.length - 1; i++) {
    // if the number we are currently viewing and the next number are the same, store it in our results variable
    if (nums[i + 1] == nums[i]) {
      results.push(nums[i]);
    }
  }
  // specifically return the zeroth index rather than the entire array because 1. we should only have one number anyway and 2. leetcode wasn't an answer with a type of integer
  return results[0];
};
