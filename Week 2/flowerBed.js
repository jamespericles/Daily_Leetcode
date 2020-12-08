/*
    Prompt:

    You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

    Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.

    https://leetcode.com/problems/can-place-flowers/


    Approach:

    To find a suitable spot, iterate through array and compare the previous and next elements. If both === 0, decrement n, otherwise continue

        note: we don't need to alter the array at all, expected outputs are true or false
        would it be smarter to first divide the array after the third index and evaluate that way?
            counter that moves over three indexes at a time? 
                divide array length by three, trim results to whole number and store in a variable used to exit a for loop
                each loop compares the data, if the slice of the array is [0,0,0], decrement n

    decrement n each time a suitable spot is found. If n !== 0 after function is finished, return false
*/

let flowerbed = [1, 0, 0, 0, 1], // return true
  n = 1;

// let canPlaceFlowers = (flowerbed, n) => {
//   let plot = [];

//   for (let i = 0; i < flowerbed.length; i++) {
//     while (plot.length < 3) {
//       plot.push(flowerbed.shift());
//       console.log(`plot after push: ${plot}`);
//     }
//     if (plot.length === 3 && plot.includes([0, 0, 0]) === true) {
//       n--;
//       console.log(`n after finding plantable area: ${n}`);
//     } else if (plot.length === 3) {
//       plot.shift();
//       plot.push(flowerbed.shift());
//     }
//     console.log(`plot after shift: ${plot}`);

//     if (n == 0) {
//       return true;
//     } else return false;
//   }
// };

/*
    Add first three elements to plot array
    When plot.length = 3, plot.includes([0,0,0])
        if true, decrement n
    After which, remove the first item and push the next from flower bed
    Compare 
*/

// if (plot.length === 3) {
//   if (plot.includes([0, 0, 0]) === true) {
//     n--;
//   }
//   plot.splice(0, 3);
// } else if (plot.length < 3) {
//   plot.push(flowerbed[i]);
// }

// let canPlaceFlowers = (flowerbed, n) => {
//   let plot = [];

//   while (plot.length < 3) {
//     plot.push(flowerbed.shift());
//   }
//   if (plot.length === 3) {
//     if (plot.includes([0, 0, 0])) {
//       n--;
//     } else {
//       plot.shift();
//       plot.push(flowerbed.shift());
//     }
//   }
//   if (n == 0) {
//     return true;
//   } else return false;
// };

let canPlaceFlowers = (flowerbed, n) => {
  if (n === 0) return true;

  let planted = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    // if the current position, the one to its left, and the one to its right are all 0's, increment how many flowers have been planted and set the current position to 1 to represent the newly planted flower
    if (flowerbed[i] == 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      planted++;
      flowerbed[i] = 1;
    }
  }
  return planted >= n;
};
