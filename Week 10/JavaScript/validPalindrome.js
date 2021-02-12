/**
 * Prompt:
 *
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 *
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 *
 * https://leetcode.com/problems/valid-palindrome/
 */

/**
 * @param {string} s
 * @return {boolean}
 */

let isPalindrome = (s) => {
  let reversed = s
    .replace(/[^0-9a-z-A-Z ]/g, "") // delete all special characters
    .replace(/\s+/g, "") // delete all white space
    .replace(/-/g, "") // delete all dashes
    .toLowerCase() // set everything to lowercase (prompt says to ignore casing)
    .split("")
    .reverse() // only unique step here compared to what action we perform on the original string
    .join("");
  let comparison = s
    .replace(/[^0-9a-z-A-Z ]/g, "")
    .replace(/\s+/g, "")
    .replace(/-/g, "")
    .toLowerCase()
    .split("")
    .join("");
  return reversed == comparison;
};

/**
 * This monstrosity didn't perform too bad, runtime of 108ms (faster than 29.10%) and
 * memory usage of 48.3mb (less than 6.04%)
 */
