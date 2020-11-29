/* Prompt:

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

https://leetcode.com/problems/valid-parentheses/submissions/

*/

let s = "()"; // Should return true
let s2 = "(]"; // Should return false
let s3 = "([)]"; // Should return false

// let isValid = (s) => {
//   let parens = s.split("");
//   let firstCheck = parens.length;

//   //   Every instance of s.length being odd will mean that it is false. Below checks if .length is false and exits the function before moving forward if it is
//   if (Math.abs(firstCheck % 2) == 1) {
//     return false;
//   }

//   //   Check to see if there is a matching closing paren, curly brace or bracket. If there isn't, return false
//   for (let i = 0; i < parens.length; i++) {
//     if (parens[i] == "(") {
//       if (parens.indexOf(")") === -1) {
//         return false;
//       }
//     } else if (parens[i] == "{") {
//       if (parens.indexOf("}") === -1) {
//         return false;
//       }
//     } else if (parens[i] == "[") {
//       if (parens.indexOf("]") === -1) {
//         return false;
//       }
//     } else return true;
//   }
// };

// First attempt worked unless the string looked like s3

let isValid = (s) => {
  // Stack, for holding opening parens
  const stack = [];

  // Map, for finding opening counterpart when
  // we find a closing paren.
  const parenMatch = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < s.length; i++) {
    // Check if we get a match from the map above
    const matchingParen = parenMatch[s[i]];
    if (!matchingParen) {
      // If no match, we must be dealing with
      // an opening paren - push onto stack for
      // later comparison.
      stack.push(s[i]);
    } else {
      // If we get a match, it's a closing paren.
      // Pop the last opening paren off the stack.
      const lastOpen = stack.pop();
      if (lastOpen !== matchingParen) {
        // If they don't match, the string isn't valid.
        return false;
      }
    }
  }
  // If we've gone through every character, and the stack isn't
  // empty, there must be unpaired parens, making the string invalid.
  return !stack.length;
};

/* 
This file includes a method to
    - compare individual characters in a given string
    - utilizes a data stack and map 
*/
