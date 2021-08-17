/**
 * Prompt:
 * 
 * Given a sorted array of distinct integers and a target value, return the index if the target is found. 
 * If not, return the index where it would be if it were inserted in order.
 * 
 * Example:
 *      Input: nums = [1,3,5,6], target = 5 
 *      Output: 2
 * 
 * https://leetcode.com/problems/search-insert-position/
 */

 /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 let nums = [1, 3, 5, 6], target = 5

 let searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        /* this solution works for all edge cases because of the if statement below
        since we're looking for the index of the target if it exists, then we return i if we find target and nums[i] are the same
        or if target does not exist in our array, we return whenever we find a number that target is less than.
        this avoids the use of indexOf(target) cutting back on time complexity, it also is more efficient than looping through
        the array, inserting the value where appropriate, and then returning the index where it would be inserts
        */
        if (target === nums[i] || target < nums[i]) {
            return i
        }
    }
    
    return nums.length
};

// Above solution is time 0(n) and space O(1) and also faster than 99.66% of other solutions