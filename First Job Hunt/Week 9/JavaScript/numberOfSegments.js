/**
 * Prompt:
 *
 * You are given a string s, return the number of segments in the string.
 *
 * A segment is defined to be a contiguous sequence of non-space characters.
 *
 * https://leetcode.com/problems/number-of-segments-in-a-string/
 */

let countSegments = (s) => {
  if (s.trim() === "") return 0;
  return s.match(/[^\s]+/g).length;
};

/**
 * Not the best stats, but I wanted to practice my regex. Runtime of 80ms (faster than 39.87%)
 * and memory usage of 38.7mb (less than 8.23%)
 *
 * Explanation of Regex Expression:
 *
 * /[^\s]+/gm
 * Match a single character not present in the list below [^\s]+
 *      + Quantifier — Matches between one and unlimited times, as many times as possible, giving back as needed (greedy)
 *      \s matches any whitespace character (equal to [\r\n\t\f\v ])
 * Global pattern flags
 *      g modifier: global. All matches (don't return after first match)
 *      m modifier: multi line. Causes ^ and $ to match the begin/end of each line (not only begin/end of string)
 *
 * https://regex101.com/r/JMfJL0/1
 */
