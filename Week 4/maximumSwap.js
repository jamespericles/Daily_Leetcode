/* 
    Prompt:

    Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. 
    
    Return the maximum valued number you could get.

    https://www.youtube.com/watch?v=YM4_hj7AWrI&ab_channel=happygirlzt
*/

let num = 2736; // output should be 7236

let maximumSwap = (num) => {
  let nums = String(num).split("");

  // Find the largest tail for each number in nums
  const lastMap = nums.reduce((acc, i, idx) => {
    acc[i] = idx;
    return acc;
  }, {});

  // loop through each character
  for (let i = 0; i < nums.length; i++) {
    for (let d = 9; d > nums[i]; d--) {
      if (lastMap[d] > i) {
        // create temporary variable to store value for swapping
        let temp = nums[i];
        nums[i] = nums[lastMap[d]];
        nums[lastMap[d]] = temp;

        return Number.parseInt(nums.join(""));
      }
    }
  }

  // If no change was made, return the original number
  return num;
};
