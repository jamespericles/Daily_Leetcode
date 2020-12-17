/* 
    Prompt:
    
    Given a string s, find the length of the longest substring without repeating characters.

*/

let s = "abcabcbb"; // should output 3

let lengthOfLongestSubstring = (s) => {
  let sArr = s.split("").sort(),
    output = [];

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] !== sArr[i + 1]) {
      output.push(sArr[i]);
      sArr.slice(i);
    }
  }
  return output.length;
};

// Time complexity is O(n) because we only iterate over the list once
