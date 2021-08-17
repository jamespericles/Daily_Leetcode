/* 
    Prompt:

    Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

    Return the power of the string.

    

    Example 1:

    Input: s = "leetcode"
    Output: 2
    Explanation: The substring "ee" is of length 2 with the character 'e' only.

    https://leetcode.com/problems/consecutive-characters/
*/

let s = "leetcode"; //should return 2

let maxPower = (s) => {
  // initiate counters for the max and the current count, starting at one
  let maxCount = 1,
    count = 1;

  // loop through the length of s. if the current letter is equal to the following letter, increment count and set maxCount to be the largest count
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
      maxCount = Math.max(count, maxCount);
      // if the next letter is not the same as the letter we are currently looking at, reset count to start anew
    } else {
      count = 1;
    }
  }

  return maxCount;
};
