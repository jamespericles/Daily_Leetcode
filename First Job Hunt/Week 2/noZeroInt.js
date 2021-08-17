/*
    Prompt:
    
    Given an integer n. No-Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.

    Return a list of two integers [A, B] where:

    A and B are No-Zero integers.
    A + B = n
    It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

    https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/
*/

n = 2;

const helper = (x) => {
  let digit = 0;

  while (x > 0) {
    if (x % 10 === 0) break;
    x = (x / 10) << 0;
    digit++;
  }
  return digit;
};

let getNoZeroIntegers = (n) => {
  let x = 1,
    y = n - 1;

  while (true) {
    let num = 10 ** helper(y);
    if (num < y) {
      y -= num;
      x += num;
      continue;
    }
    num = 10 ** helper(x);
    if (num > x) break;
    y -= num;
    x += num;
  }
  return [x, y];
};
