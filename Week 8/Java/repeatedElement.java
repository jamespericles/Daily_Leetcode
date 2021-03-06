
/**
 * Prompt:
 * 
 * In an array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
 * 
 * Return the element repeated N times.
 * 
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 */

import java.util.Arrays;

class Solution {
    public int repeatedNTimes(int[] A) {
        Arrays.sort(A);
        int output = 0;
        for (int i = 0; i < A.length - 1; i++) {
            if (A[i] == A[i + 1]) {
                output = A[i];
                break;
            }
        }
        return output;
    }
}

/**
 * Nothing too crazy here, runtime of 6ms (faster than 35.19%) and memory usage
 * of 40.4mb (less than 22.07%).
 * 
 * 
 * ******EDIT*******
 * 
 * Adding a break statement from my JavaScript solution returned marked
 * improvements to our stats, shaved off 1ms (which is likely just variation in
 * my internet speeds) but the decrease in memory usage was very significant
 * (less than 64.81% compared to 22.07%)
 */