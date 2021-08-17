/**
 * Prompt:
 *
 * Given an Array A of positive lengths, return the largest perimeters of a triangle with non-zero area, formed from 3 of these lengths.
 *
 * If it is impossible to form any triangle of non-zero area, return 0.
 *
 * Example:
 *      Input: [2, 1, 2]
 *      Output: 5
 *
 * https://leetcode.com/problems/largest-perimeter-triangle/
 */

/**
 * @param {number[]} A
 * @return {number}
 */

/*
 A few things to note for this one:
    1. A is always an array of positive numbers, meaning .sort() will accurately sort our array for us
    2. We're only interested in the largest possible triangle, so if we sort our array, we'll only care for the last three numbers
    3. We need to return 0 if it is impossible to form a triangle with A, we can do so using the Inequality Theorem
        The Inequality Theorem states that the sum of two sides of a triangle must be greater than the side of the third.
        If this isn't true for one of the three combinations of sides, the triangle is not valid.
 */

let A = [2, 1, 2],
  B = [1, 2, 1],
  C = [3, 6, 2, 3];

let largestPerimeter = (A) => {
  const sortedA = A.sort((a, b) => b - a);
  let perimeter = 0;

  for (let i = 0; i < sortedA.length; i++) {
    if (i + 2 >= sortedA.length || perimeter) break;
    if (sortedA[i] >= sortedA[i + 1] + sortedA[i + 2]) continue;

    if (sortedA[i] && sortedA[i + 1] && sortedA[i + 2]) {
      perimeter = sortedA[i] + sortedA[i + 1] + sortedA[i + 2];
    }
  }

  return perimeter;
};
