/**
 * Prompt:
 * 
 * Write a function that takes an unsigned integer and returns the number of '1'
 * bits it has (also known as the Hamming weight).
 * 
 * https://leetcode.com/problems/number-of-1-bits/
 */

public class Solution {
    public int hammingWeight(int n) {
        // convert our value to binary
        String binary = Integer.toBinaryString(n);
        // count will be used to return the hamming weight after looping through the
        // binary. one will be used to compare the characters within the String
        int count = 0;
        char one = '1';

        // loop through our binary string and iterate count each time a character within
        // it is equal to 1
        for (int i = 0; i < binary.length(); i++) {
            char c = binary.charAt(i);
            System.out.println(c);
            if (Character.compare(c, one) == 0) {
                count += 1;
            }
        }
        return count;
    }
}

/**
 * Not the greatest statistics here unfortunately. Runtime of 20ms (faster than
 * 6.39%) and memory usgae of 38.1mb (less than 9.69%)
 */