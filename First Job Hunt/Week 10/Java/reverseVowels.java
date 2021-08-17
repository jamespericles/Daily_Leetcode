/**
 * Prompt:
 * 
 * Write a function that takes a string as input and reverse only the vowels of
 * a string.
 * 
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

class Solution {
    public String reverseVowels(String s) {
        StringBuilder reversedVowels = new StringBuilder(s);

        int head = 0, tail = s.length() - 1;
        while (head < tail) {
            char headChar = reversedVowels.charAt(head);
            char tailChar = reversedVowels.charAt(tail);

            if (isVowel(headChar) && !isVowel(tailChar)) {
                tail--;
                continue;
            } else if (!isVowel(headChar) && isVowel(tailChar)) {
                head++;
                continue;
            } else if (isVowel(headChar) && isVowel(tailChar)) {
                reversedVowels.replace(head, head + 1, "" + tailChar);
                reversedVowels.replace(tail, tail + 1, "" + headChar);
            }

            head++;
            tail--;
        }

        return reversedVowels.toString();
    }

    boolean isVowel(char c) {
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O'
                || c == 'U';
    }
}

/**
 * Not the best solution, runtime of 59ms (faster than 9.26%) and memory usage
 * of 43.5mb (less than 5.16%)
 */