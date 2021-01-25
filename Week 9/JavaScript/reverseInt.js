/**
 * Prompt:
 *
 * Given a signed 32-bit integer x, return x with its digits reversed. If
 * reversing x causes the value to go outside the signed 32-bit integer range,
 * then return 0
 *
 * https://leetcode.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */

let reverse = (x) => {
  const isNegative = x < 0;
  x = Math.abs(x);
  let ret = 0;

  while (x > 0) {
    const num = x % 10;
    x = Math.floor(x / 10);
    ret *= 10;
    ret += num;
  }

  if (ret > Math.pow(2, 31)) return 0;

  return isNegative ? ret * -1 : ret;
};

/**
 * Pretty solid stats, runtime of 100ms (faster than 59.67%) and memory usage of 40mb (less than 86.71%)
 */
