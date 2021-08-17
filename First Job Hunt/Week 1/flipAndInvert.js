/* 
Prompt:

Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].

*/

let A = [
  [1, 1, 0],
  [1, 0, 1],
  [0, 0, 0],
];

let flipAndInvertImage = (A) => {
  // first reverse each item in array to 'flip' image
  A.map(function reverse(item) {
    return Array.isArray(item) && Array.isArray(item[0])
      ? item.map(reverse)
      : item.reverse();
  });
  console.log(`After reverse: ${A}`);

  //   iterate over length of array. Set 0s = 1s and vice versa
  for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
      // If the number is equal to 0, set it to 1
      if (A[i][j] == 0) {
        A[i][j] = 1;
        // otherwise is the number is equal to 1, set it to 0
      } else {
        A[i][j] = 0;
      }
    }
  }
  console.log(`After invert: ${A}`);
  return A;
};

/* 
This file includes a method to 
    - reverse rows in a binary matrix
    - iterate over a matrix and change values where a condition is met
*/
