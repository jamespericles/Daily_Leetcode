/* 
    Prompt:

    Given an integer n, return true if it is a power of two. Otherwise, return false.

    An integer n is a power of two, if there exists an integer x such that n == 2x. 

    https://leetcode.com/problems/power-of-two/
*/

let n = 16;

let isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  return n && (n & (n - 1)) === 0;
};
