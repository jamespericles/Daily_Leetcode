/**
 * Prompt:
 *
 * Given an array nums of integers, return how many of them contain an even number of digits.
 *
 * Example:
 *      Input: nums = [555, 901, 482, 1771]
 *      Output: 1
 *      Explanation: Only nums[3] has an even number of digits
 *
 * https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

class Solution {
    public int findNumbers(int[] nums) {
        int output = 0;

        for (int i = 0; i < nums.length; i++) {
            if ((int) (Math.log10(nums[i]) + 1) % 2 == 0) {
                output++;
            }
        }
        return output;
    }
}

/*
 * Super interesting results. Runtime of 1ms (faster than 94.66%) and memory
 * usage of 40.7mb (less than 5.10%). In learning Java, it's very clear to me
 * that it is significantly faster than JavaScript, which has very clear
 * benefits. This being my third Java refactor of my JavaScript solutions, it
 * seems safe to say that Java is significantly faster (1ms Java versus around
 * 80, sometimes up to 160ms for JavaScript)
 */