/**
 * Prompt:
 * 
 * Given an integer n, return true if it is a power of four. Otherwise, return
 * false.
 * 
 * https://leetcode.com/problems/power-of-four/
 */

class Solution {
    public boolean isPowerOfFour(int n) {
        // to satisfy the two test cases where n was 0 and negative
        if (n <= 0) {
            return false;
        }

        // find log4(n)
        double i = Math.log(n) / Math.log(4);

        // return true if log4(n) is an integer
        return i == Math.floor(i);
    }
}

/**
 * This more unique approach is fairly efficient. Runtime of 1ms (faster than
 * 99.37%) and memory usage of 36.4mb (less than 26.37%)
 */