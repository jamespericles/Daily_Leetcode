/**
 * Prompt:
 * 
 * Reverse bits of a given 32 bits unsigned integer.
 * 
 * https://leetcode.com/problems/reverse-bits/
 */

public class Solution {
    public int reverseBits(int n) {
        int ans = 0;
        for (int i = 0; i < 32; i++) {
            ans <<= 1;
            ans = ans | (n & 1);
            n >>= 1;
        }
        return ans;
    }
}

/**
 * Not the best results here but it gets the job done! Runtime of 3ms (faster
 * than 6.85%) and memory usage of 39mb (less than 29.84%)
 */