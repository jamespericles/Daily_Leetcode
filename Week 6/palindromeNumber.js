/**
 * Prompt:
 *
 * Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
 *
 * Example:
 *
 * Input: x = 121
 * Output: true
 *
 * https://leetcode.com/problems/palindrome-number/
 */

/**
 * @param {number} x
 * @return {boolean}
 */

let x = 121,
  y = -121;

let isPalindrome = (x) => {
  // a valid negative number can never be a palindrome, so lets first check if our number is negative to save space and time
  if (Math.sign(x) === -1) {
    return false;
    // if the integer is positive, create two strings to be compares
  } else {
    // str is our number, reverserStr is our number reversed
    let str = x.toString();
    let reverseStr = str.split("").reverse().join("");
    // if str and reverseStr are the same, then they are palindromes
    return str === reverseStr;
  }
};
