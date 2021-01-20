/**
 * Prompt:
 * 
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * https://leetcode.com/problems/add-binary/
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

class Solution {
    public String addBinary(String a, String b) {
        return new java.math.BigInteger(a, 2) // parse from string a
                .add(new java.math.BigInteger(b, 2)) // parse from string b
                .toString(2); // convert back to binary string
    }
}

/*
 * Rather simple solution, stats are crazy either. Runtime of 5ms (faster than
 * 22.23%) and memory usage of 39.4mb (less than 17.61%)
 */