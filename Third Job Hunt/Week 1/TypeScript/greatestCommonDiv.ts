/**
 * Prompt:
 *
 * Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
 *
 * The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.
 *
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/description/
 */

const findGCD = (nums: number[]): number => {
  // First determine the smallest and largest numbers in the array
  const min = Math.min(...nums)
  const max = Math.max(...nums)

  // Then determine the greatest common divisor of the two numbers by using a modulo operator on both numbers
  for (let i = min; i > 0; i--) {
    if (min % i === 0 && max % i === 0) {
      return i
    }
  }

  return 1
}
