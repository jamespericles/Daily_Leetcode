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
 * 6.39%) and memory usage of 38.1mb (less than 9.69%)
 */

public class Solution {
    public int hammingWeight(int n) {
        String binary = Integer.toBinaryString(n).replace("0", "");
        int count = 0;
        char one = '1';

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
 * I thought about the above solution in my sleep last night and wanted to give
 * it a try. The idea was that if I first remove all the zeroes before looping
 * through the binary, that it may improve my performance. That proved to be
 * slightly true (this solution bumped me up a roughly 28 percentile on memory
 * usage). Runtime of 21ms (faster than 6.39%) and memory usage of 37.7mb (less
 * than 37.37%)
 */

public class Solution {
    public int hammingWeight(int n) {
        String binary = Integer.toBinaryString(n).replace("0", "");

        return binary.length();
    }
}

/**
 * I grossly overcomplicated this problem. You don't need to loop through the
 * binary version of the String if you remove all the zeroes, you only need to
 * return the length, which represents all the 1's. Runtime of 2ms (faster than
 * 18.26%) and memory usage of 36mb (less than 66.11%)
 */