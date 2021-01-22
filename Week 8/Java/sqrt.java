/**
 * Prompt:
 * 
 * Given a non-negative integer x, compute and return the square root of x.
 * 
 * Since the return type is an integer, the decimal digits are truncated, and
 * only the integer part of the result is returned.
 * 
 * https://leetcode.com/problems/sqrtx/
 */

class Solution {
    public int mySqrt(int x) {
        return (int) Math.sqrt(x);
    }
}

/**
 * This was one of those problems that I feel like it'd be very easy to
 * overthink and get lost in the weeds. I simply cast an integer type on Java's
 * built in Math.sqrt function. Runtime was 1ms (faster than 99.98%) and memory
 * usage was 36.5mb (less than 17.85%)
 */