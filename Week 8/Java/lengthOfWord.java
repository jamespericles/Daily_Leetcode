/**
 * Prompt:
 * 
 * Given a string s consists of some words separated by spaces, return the
 * length of the last word in the string. If the last word does not exist,
 * return 0.
 * 
 * A word is a maximal substring consisting of non-space characters only.
 * 
 * Example: Input: s = "Hello World" Output: 5
 * 
 * https://leetcode.com/problems/length-of-last-word/
 */

/**
 * @param {string} s
 * @return {number}
 */

class Solution {
    public int lengthOfLastWord(String s) {
        // first check if the string only contains white space. If it does, return 0
        if (s.trim().isEmpty()) {
            return 0;
        }
        // Using regex, match the entire string from `^` to `$`,
        // capture the last sequence with `\w+` in capture group 1,
        // then replace the whole sentence with it using
        // `$1`
        String lastWord = s.replaceAll("^.*?(\\w+)\\W*$", "$1");

        return lastWord.length();
    }
}

/*
 * To challenge myself, I decided to do my daily leetcode with Java first. It
 * went fairly well, I'm excited to be picking up Java relatively quickly. My
 * stats are are runtime of 157ms (faster than 5.81%) and memory usage of 37.9mb
 * (less than 20.78%). Obviously still more to learn but exciting nonetheless.
 */

class Solution {
    public int lengthOfLastWord(String s) {
        String str = s.trim();
        int len = str.length();
        i = len - 1;

        while (i >= 0 && str[i] != " ")
            i--;
        return len - 1 - i;
    }
}

/**
 * I recreated my better performing JavaScript solution hoping the stats would
 * improve, interestingly they're almost identical to my previous Java solution.
 */