/**
 * Prompt:
 *
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 *
 * Example 1:
 *
 *      Input: S = "ab#c", T = "ad#c"
 *      Output: true
 *      Explanation: Both S and T become "ac".
 *
 * Example 2:
 *
 *      Input: S = "ab##", T = "c#d#"
 *      Output: true
 *      Explanation: Both S and T become "".
 *
 * https://leetcode.com/problems/backspace-string-compare/
 */

/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */

let S = "a##c",
  T = "#a#c";

let backspaceCompare = (S, T) => {
  let arr1 = S.split(""),
    arr2 = T.split("");

  //loop through the first input, where there is a hash, delete it and the item that came before it
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === "#" && i !== 0) {
      arr1.splice(i, 1);
      arr1.splice(i - 1, 1);
      i = 0;
    }
  }
  //delete any remaining hashes for final comparison later
  let index1 = arr1.indexOf("#");
  if (index1 > -1) {
    arr1.splice(index1, 1);
  }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === "#" && i !== 0) {
      arr2.splice(i, 1);
      arr2.splice(i - 1, 1);

      i = 0;
    }
  }
  let index2 = arr2.indexOf("#");
  if (index2 > -1) {
    arr2.splice(index2, 1);
  }
  let str1 = arr1.toString(),
    str2 = arr2.toString();
  return str1 === str2;
};

// this is incredibly inefficient. I'm going to blame that on a lack of coffee in my apartment and refactor when I'm more rested

// iterate and count number of hashes, delete based on that number
