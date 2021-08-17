/**
 * Prompt:
 * 
 * Implement pow(x,n), which calculates x raised to the power n
 * 
 * Example:
 *      Input: x = 2.00000, n = 10
 *      Output: 1024.00000
 * 
 * https://leetcode.com/problems/powx-n/
 */

/**
 * @param {double}x
 * @param {int}n
 * @return {double}
 */

class Solution {
    public double myPow(double x, int n) {
        if (n == 0) {
            return 1.00000;
        }

        return (double) Math.pow(x, n);

    }
}

/*
 * Above solution is very simple and intuitive. Results were a runtime of 0ms
 * (faster than 100.00% of other solutions!) and memory usage of 37.2mb (less
 * than 92.21% of other solutions)
 */

class Solution {
    public double myPow(double x, int n) {
        if (n == 0) {
            return 1.00000;
        }
        if (n > 0) {
            return x * myPow(x, --n);
        } else {
            return (double) Math.pow(x, n);
        }
    }
}

/**
 * This solution is really cool in that it utilizes recursion. It doesn't
 * satisfy all conditions, namely if n is not a whole number or if n is
 * negative, but simply because it was first use of recursion I wanted to keep
 * it in my upload for today
 */