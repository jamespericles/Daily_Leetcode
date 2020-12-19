/* 
    Prompt:

    Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

    Find all the elements that appear twice in this array.

    https://leetcode.com/problems/find-all-duplicates-in-an-array/
*/

let nums = [4, 3, 2, 7, 8, 2, 3, 1];

let findDuplicates = (nums) => {
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

  return results;
};
