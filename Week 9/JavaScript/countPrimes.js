/**
 * Prompt:
 *
 * Count the number of primes numbers less than a non-negative number, n.
 *
 * https://leetcode.com/problems/count-primes/
 */

const countPrimes = (n, count = 0, array = []) => {
  for (let i = 2; i < n; i++) {
    if (array[i]) continue;
    else count++;
    for (let j = i + i; j <= n; j += i) array[j] = true;
  }

  return count;
};

/**
 * Less optimized than a sieve solution but may be slightly easier to understand for those unfamiliar with sieve.
 * Runtime of 204ms (faster than 51.72%) and memory usage of 118.2mb (less than 5.79%)
 */
