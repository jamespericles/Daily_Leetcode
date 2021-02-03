/**
 * Prompt:
 *
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 *
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

const reverseVowels = (s) => {
  let letters = s.split("");
  let i = 0;
  let j = letters.length - 1;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  while (i < j) {
    let temp = "";
    if (vowels.includes(letters[i]) && vowels.includes(letters[j])) {
      temp = letters[i];
      letters[i] = letters[j];
      letters[j] = temp;
      i++;
      j--;
    } else if (!vowels.includes(letters[i])) {
      i++;
    } else {
      j--;
    }
  }

  return letters.join("");
};

/**
 * Fairly similar to my Java solution with much better stats. Runtime of 152ms (faster than 21.33%)
 * and memory usage of 43.9mb (less than 85.83%)
 */
