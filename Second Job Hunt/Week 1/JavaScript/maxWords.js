/**
 * There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.
 *
 * Given a string text of words separated by a single space (no leading or trailing spaces) and a string brokenLetters of all distinct letter keys that are broken,
 * ... return the number of words in text you can fully type using this keyboard.
 *
 * https://leetcode.com/problems/maximum-number-of-words-you-can-type/
 */

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */

let a = 'leet code',
  b = 'e';

const canBeTypedWords = (text, brokenLetters) => {
  let set = new Set();
  for (let a of brokenLetters) {
    set.add(a);
  }
  let counter = 0;
  for (let a of text.split(' ')) {
    let f = true;
    for (let b of a) {
      if (set.has(b)) {
        f = false;
      }
    }
    if (f) {
      counter++;
    }
  }
  return counter;
};

/**
 * Not the best results, 106 ms (faster than 15.01%) and 40.5mb of memory (less than 29.98%)
 */
