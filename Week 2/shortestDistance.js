/*
    Prompt:
    
    Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

    Example 1:

    Input: S = "loveleetcode", C = 'e'
    Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]

    https://leetcode.com/problems/shortest-distance-to-a-character/
*/

let S = "loveleetcode",
  C = "e";

//   Two pointer method, O(n) Time and O(1) Space complexity

let shortestToChar = (S, C) => {
  let result = new Array(S.length);
  result.fill(0);

  let left = -1;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === C) {
      for (let j = left + 1; j < i; j++) {
        result[j] = Math.min(left > -1 ? j - left : Infinity, i - j);
      }
      left = i;
    } else if (left > -1) {
      result[i] = i - left;
    }
  }

  return result;
};

/*
    This file contains a two-pointer method to traverse an Array, resulting in O(n) time and O(1) space complexity
*/
