/* 
    Prompt: Given an array of tools where in one can traverse in either forwards or backwards direction. Return the smallest steps needed to reach a given tool from starting position.

    No URL for this one either, part of the same coding assessment

     * Two-pointer solution?
 *      one pointer traversing one direction, the other traversing in the opposite, return whichever pointer is less than the other
 *      if correct, should be able to solve with O(n) time and O(1) space complexity
 * 
 *      tools = array of given tools
 *      k = current index of tool in use
 *      q = tool we need to reach
 */

let tools = ["ballendmill", "facemill", "keywaycutter", "slotdrill"],
  k = 1,
  q = "slotdrill";

// let toolchanger = (tools, k, q) => {
//   let count1 = 0,
//     count2 = 0;

//   for (let i = k; i < tools.length; i++) {
//     for (let j = k; j < tools.length; j--) {
//       if (tools[i] === q || tools[j] === q) {
//         if (count1 < count2) {
//           return count1;
//         } else {
//           return count2;
//         }
//       } else {
//         count1++;
//         count2++;
//       }
//     }
//   }
// };

// 9/13
let toolchanger = (tools, k, q) => {
  let count1 = 0,
    count2 = 0;

  for (let i = k; i < tools.length; i++) {
    if (tools[i] === q) {
      return count1;
    } else {
      count1++;
    }
  }
  tools.reverse();
  for (let j = k; j < tools.length; j++) {
    if (tools[j] === q) {
      return count2;
    } else {
      count2++;
    }
  }

  if (count1 < count2) {
    return count1;
  } else {
    return count2;
  }
};
