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
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

let numBottles = 9,
  numExchange = 3;

let numWaterBottles = (numBottles, numExchange) => {
  let drank = numBottles,
    empty = 0;

  while (numBottles >= numExchange) {
    empty = numBottles % numExchange;
    numBottles = Math.floor(numBottles / numExchange);
    drank += numBottles;
    numBottles += empty;
  }

  return drank;
};
