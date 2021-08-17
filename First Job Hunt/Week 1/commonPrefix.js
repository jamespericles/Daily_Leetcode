/*
Prompt:

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

https://leetcode.com/problems/longest-common-prefix/
 
*/

let strs = ["flower", "flow", "flight"];

let longestCommonPrefix = (strs) => {
  // If there is no common prefix return an empty string
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      // evaluate each letter, slice letters that match
      if (s[i] !== strs[0][i]) return s.slice(0, i);
    }
  }
  return strs[0];
};

/*
This file includes a method to
    - compare individual letters in an array of strings
*/
