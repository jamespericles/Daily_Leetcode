/**
 * Prompt:
 *
 * Given numBottles full water bottles, you can exchange numExchange empty water bottles for one full water bottle.
 *
 * The operation of drinking a full water bottle turns it into an empty bottle.
 *
 * Return the maximum number of water bottles you can drink.
 *
 * Example:
 *      Input: numBottles = 9, numExchange = 3
 *      Output: 13
 *      Explanation: You can exchange 3 empty bottles to get 1 full water bottle.
 *      Number of water bottles you can drink: 9 + 3 + 1 = 13.
 *
 * https://leetcode.com/problems/water-bottles/
 */

/**
 * @param {int} numBottles
 * @param {int} numExchange
 * @return {int}
 */

class Solution {
    public int numWaterBottles(int numBottles, int numExchange) {
        int drank = numBottles;
        int empty = 0;

        while (numBottles >= numExchange) {
            empty = numBottles % numExchange;
            numBottles = (int) Math.floor(numBottles / numExchange);
            drank += numBottles;
            numBottles += empty;
        }

        return drank;
    }
}

/*
 * Not the craziest practice given how similar this solution is to my JavaScript
 * one, but this version has some fantastic performance stats! Faster than 100%
 * of other solutions, and less memory than 85.08%
 */