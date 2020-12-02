/*
    Prompt: 
    
    In a given integer array nums, there is always exactly one largest element.

    Find whether the largest element in the array is at least twice as much as every other number in the array.

    If it is, return the index of the largest element, otherwise return -1.

    https://leetcode.com/problems/largest-number-at-least-twice-of-others/  
    
    */

let nums = [0, 0, 3, 2]; // Should expect -1

// The function below works, I didn't realize that the expected output is not the value of the dominant index, rather, its position in the array

// let dominantIndex = (nums) => {
//   //   first sort the array and remove the final (and highest) value from the array
//   nums.sort();
//   let dominant = nums.pop();

//   //   if dominant is less than any of the remaining values in our array, set dominant to -1 as it fails the givem parameter
//   for (let i = 0; i < nums.length; i++) {
//     if (dominant < nums[i] * 2) {
//       dominant = -1;
//     }
//   }
//   return dominant;
// };

let dominantIndex = (nums) => {
  //   First set a variable to the index of the highest number, and another to the number itself
  let dominantIndex = nums.indexOf(Math.max(...nums));
  let dominant = Math.max(...nums);

  //   Remove the highest number from our array to make comparing the other numbers easier
  nums.splice(dominantIndex, 1);

  //   If nums is empty after splicing the largest number (meaning the array was only one number to begin with),
  //   return 0 as the highest number was at the zeroth index the whole time
  if (nums.length == 0) {
    return 0;
  }

  //   Set another variable equal to whatever number is highest after removing the first highest, for comparison sake
  let secondDominant = Math.max(...nums);

  if (dominant == secondDominant * 2 || dominant > secondDominant * 2) {
    return dominantIndex;
  } else if (secondDominant * 2 > dominant) {
    return -1;
  }
};
