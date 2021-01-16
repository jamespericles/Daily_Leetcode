/**
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

/**
 * @param {number} n
 * @return {number[]}
 */

let n = 5;

// helper function to determine if n is odd. If it is, we append 0 after creating our symmetric array to satisfy the conditions
let isOdd = (n) => {
  if (n % 2 === 1) {
    return true;
  }
  return false;
};

let sumZero = (n) => {
  let output = [],
    inserts = Math.floor(n / 2),
    x = 1;

  /*
    With each insert, we're adding two symmetrical values, a positive and a negative that zero one another out. 
    The variable `inserts` represents how many pairs need to be inserted to satisfy n.
    While inserts is greater than 0, we insert a new pair starting with 1, then increment x and continue until inserts is 0.
    Because inserts is n / 2 rounded down, we then check if n is odd (which inserts doesn't account for.)
    If n is in-fact odd, we push zero.
*/
  while (inserts) {
    output.push(x);
    output.push(-Math.abs(x));
    x++;
    inserts--;
  }
  if (isOdd(n) === true) {
    output.push(0);
  }
  return output;
};

/*
    I'm really happy with this one, faster than 93.55% of solutions and less space than 53.10%. I think this is a great solution

    I enjoyed this one so much I'm going to refactor it to try and improve upon it
*/

let sumZero = (n) => {
  let output = [],
    x = 1;

  if (n % 2 !== 0) {
    output.push(0);
  }

  /*
    Very similar to the first attempt, but there's no need to create a variable to store the inserts needed, we can simply
    compare the length of output to n. We'll exit the while loop when output's length is equal to n, accomplishing the same thing
    and saving some memory.

    We also don't need the help function, we can run the same logic and push 0 into our output first, then move on with the rest
    of the function's logic, saving even more space for ourselves.  
  */

  while (output.length < n) {
    output.push(x);
    output.push(-Math.abs(x));
    x++;
  }

  return output;
};

/* 
    This refactor slightly decreased the efficiency, bringing us down to being faster than only 80.40% of solutions, but decreased the space by a third roughly.
    It is important to note that there is always slight variability in the speed and space measurements, I believe in relation to my internet speed.
    I say that as this refactored solution should be both faster and use less speed. 
*/
