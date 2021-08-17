/* 
    Prompt;
    
    Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

    Return the decimal value of the number in the linked list.
    
    https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
*/

let head = [1, 0, 1];

// Both functions below are simple and work, but return runtime errors in leetcode for whatever reason. I've tested extremes and they seem fine

let getDecimalValue = (head) => {
  return head.reduce((acc, val) => {
    return (acc << 1) | val;
  });
};

let getDecimalValue = (head) => {
  const binary = head.join("");
  return parseInt(binary, 2);
};

// Below function works on leetcode. Faster than 91.99% and less than 70.01% memory

const getDecimalValue = (head) => {
  let val = 0;
  while (head) {
    val *= 2;
    val += head.val;
    head = head.next;
  }
  return val;
};
