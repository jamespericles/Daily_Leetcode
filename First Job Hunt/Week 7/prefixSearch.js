/**
 * Prompt:
 *
 * Given a sentence that consists of some words separated by a single space, and a searchWord.
 *
 * You have to check if searchWord is a prefix of any word in sentence.
 *
 * Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).
 *
 * If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.
 *
 * A prefix of a string S is any leading contiguous substring of S.
 *
 * Example:
 *      Input: sentence = "i love eating burger", searchWord = "burg"
 *       Output: 4
 *          Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.
 *
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/
 */

/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

let sentence = "i love eating burger",
  searchWord = "burg";

let prefixSearch = (sentence, searchWord) => {
  // convert our string into an array to search through
  const words = sentence.split(" ");

  for (let i = 0; i < words.length; i++) {
    // .startsWith looks for a word that starts with a string, in this case, searchWord
    // we return i + 1 because our array starts at 0, but we want to know which word contains our prefix
    if (words[i].startsWith(searchWord)) return i + 1;
  }

  return -1;
};
