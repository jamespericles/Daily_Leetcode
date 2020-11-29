/* Prompt: 

Given the array of integers nums, you will choose two different indices i and j of that array. 

Return the maximum value of (nums[i]-1)*(nums[j]-1).

*/

let nums = [3, 4, 5, 2];

let maxProduct = (nums) => {
  // Find the highest value in our array and remove it from our array to later find the second highest
  let max1 = Math.max(...nums);
  nums.splice(nums.indexOf(max1), 1);

  // Find the second highest values in our array
  let max2 = Math.max(...nums);

  // Complete the second portion of the prompt, using the values we found earlier
  return (max1 - 1) * (max2 - 1);
};

/* 
This file includes a method to
    - find the max value of an array using ES6 spread functions
*/
