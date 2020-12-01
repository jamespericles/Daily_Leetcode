/*
    Prompt:

    Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

    Find all the elements of [1, n] inclusive that do not appear in this array.
    
    https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
*/

nums = [4, 3, 2, 7, 8, 2, 3, 1]; // expected output = [5, 6]

let findDisappearedNumbers = (nums) => {
  // create array arr [1...n]
  let arr = Array.from(nums.keys(), (e, i) => (e = e + 1));

  // iterate over nums and remove each number that appears
  for (let c of nums) {
    arr[c - 1] = null;
  }

  // return whatever isn't null
  return arr.filter((e) => e !== null);
};
