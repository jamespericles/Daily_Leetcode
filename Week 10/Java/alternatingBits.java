/**
 * Prompt:
 * 
 * Given a positive integer, check whether it has alternating bits: name, if two
 * adjacent bits will always have different values.
 * 
 * https://leetcode.com/problems/binary-number-with-alternating-bits/
 */

class Solution {
    public boolean hasAlternatingBits(int n) {
        String binary = Integer.toBinaryString(n);
        if (binary.contains("11") || binary.contains("00")) {
            return false;
        } else {
            return true;
        }
    }
}

/**
 * Same solution as my JavaScript solution, but with much better results
 * (especially regarding memory usage). Runtime of 1ms (faster than 17.63%) and
 * memory usage of 35.7mb (less than 66.37%)
 */