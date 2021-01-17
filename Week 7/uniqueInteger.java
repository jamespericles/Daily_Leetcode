
/**
 * As I'm continuing to teach myself Java, I feel that I've reached a point that I can refactor an older solution in Java for practice.
 * 
 * Below is the prompt for yesterday's daily leetcode entry, refactored for Java.
 * 
 * Prompt:
 *
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 *
 * Example:
 *      Input: n = 5
 *      Output: [-7, -1, 1, 3, 4]
 *
 * https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
 */

import java.util.ArrayList;

class Solution {
    public int[] sumZero(int n) {
        // create an ArrayList variable because n could be any value from 1 to 1000
        ArrayList<Integer> output = new ArrayList<Integer>();
        int x = 1;
        int negativeX = (~(x - 1));

        // if n is an odd number, add 0 before adding any symmetrical pairs
        if (n % 2 != 0) {
            output.add(0);
        }

        // While output.size is less than n, add x, add the negative version of x,
        // increment x and decrement its negative complement.

        while (output.size() < n) {
            output.add(x);
            output.add(negativeX);
            x++;
            negativeX--;
        }

        // our function is expected to return an array of integers so we need to convert
        // from our ArrayList to an array
        // first, we create the array with a size equal to the size of ArrayList
        final int[] arr = new int[output.size()];
        int index = 0;
        // for each loop to set each Integer value within output to a new index in our
        // array
        for (final Integer value : output) {
            arr[index++] = value;
        }

        // return our array of integers
        return arr;
    }
}

/**
 * I audibly laughed at my stats. My JavaScript version of the same solution had
 * a runtime equal to 80ms and 39.1mb, which was faster than 80.74% of solutions
 * and used less space than 71.61% of solutions. For Java, my solution had a
 * runtime of 1ms and took 38.7mb. You'd think that would be incredibly
 * efficient considering I shaved off 79ms by switching languages but you'd be
 * wrong! This solution is only faster than 7.53% of other solutions and takes
 * less space than 13.47% of other solutions. Absolutely wild!
 */