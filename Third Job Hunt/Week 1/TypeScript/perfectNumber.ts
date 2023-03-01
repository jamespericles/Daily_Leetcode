/**
 * A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. A divisor of an integer x is an integer that can divide x evenly.
 *
 * Given an integer n, return true if n is a perfect number, otherwise return false.
 *
 * https://leetcode.com/problems/perfect-number/
 */

const checkPerfectNumber = (num: number): boolean => {
  // First determine the divisors of the number
  const divisors: number[] = []
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisors.push(i)
    }
  }

  // Then determine if the sum of the divisors is equal to the number, unless there are no divisors
  if (divisors.length !== 0) {
    return divisors.reduce((a, b) => a + b) === num
  } else return false
}
