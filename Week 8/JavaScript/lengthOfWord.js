/**
 * Prompt:
 *
 * Given a string s consists of some words separated by spaces, return the
 * length of the last word in the string. If the last word does not exist,
 * return 0.
 *
 * A word is a maximal substring consisting of non-space characters only.
 *
 * Example: Input: s = "Hello World" Output: 5
 *
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */

let lengthOfLastWord = (s) => {
  var str = s.trim(),
    len = str.length,
    i = len - 1;

  while (i >= 0 && str[i] !== " ") i--;
  return len - 1 - i;
};

// This solution ironically outperformed my Java solution fairly significantly.
// Runtime of 76ms (faster than 76.80%), memory usage of 38.8 mb (less than 29.08%)
