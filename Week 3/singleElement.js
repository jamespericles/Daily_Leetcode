/* 
    Prompt:
    
    You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. 
    
    Find this single element that appears only once.

    https://leetcode.com/problems/single-element-in-a-sorted-array/ 

    I plan to use a binary search method
*/

let nums = [1, 1, 2, 3, 3, 4, 4, 8, 8]; // should return 2

let singleNonDuplicate = (nums) => {
  let start = 0;
  let end = nums.length - 1;

  if (nums[0] !== nums[1]) return nums[0];
  if (nums[end] !== nums[end - 1]) return nums[end];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1])
      return nums[mid];

    if (
      (mid % 2 === 0 && nums[mid] === nums[mid + 1]) ||
      (mid % 2 !== 0 && nums[mid] === nums[mid - 1])
    ) {
      start = mid;
    } else end = mid;
  }
};
