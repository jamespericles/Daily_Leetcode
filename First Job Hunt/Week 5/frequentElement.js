/*
    Prompt:

    Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time.

    Return that integer.

    

    Example 1:

    Input: arr = [1,2,2,6,6,6,6,7,10]
    Output: 6

    https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/
*/

let arr = [1, 2, 2, 6, 6, 6, 6, 7, 10];

let findSpecialInteger = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  // get bubble size which is just 25% of array to int
  const bubble = Math.ceil(arr.length * 0.25);
  // iterate through array until bubble reaches end
  for (let i = 0; i + bubble < arr.length; i++) {
    // the number at the beginning and end of the bubble is the number we're looking for, given that the bubble is 25% the length of the array
    if (arr[i] === arr[i + bubble]) return arr[i];
  }
  // no such number occurs
  return -1;
};

let findSpecialInteger = (arr) => {
  // quick check to exit function quickly if arr contains only one number
  if (arr.length === 1) {
    return arr[0];
  }

  let hash = {},
    keys = [],
    k,
    i,
    len,
    count = Math.ceil(arr.length * 0.25);

  // create an object using arr, where k is the number and hash[k] is its frequency in the array
  for (let num of arr) {
    if (!hash[num]) hash[num] = 0;
    hash[num]++;
  }
  for (k in hash) {
    if (hash.hasOwnProperty(k)) {
      keys.push(k);
    }
  }

  keys.sort();

  len = keys.length;

  for (i = 0; i < len; i++) {
    k = keys[i];
    // if a key value is greater than 25% of the length of arr, return the value at that key
    if (hash[k] > count) {
      return parseInt(k);
    }
  }
};

/* 
The first solution is both more creative and much more efficient, but I wanted to test my knowledge of JavaScript objects and the manipulation of them

*/
