/**
 * Prompt:
 * 
 * Given a string, determine if it is a palindrome, considering only
 * alphanumeric characters and ignoring cases.
 * 
 * Note: For the purpose of this problem, we define empty string as valid
 * palindrome.
 * 
 * https://leetcode.com/problems/valid-palindrome/
 */

class Solution {
    public boolean isPalindrome(String s) {

        if (s.isEmpty())
            return true;

        int i = 0, j = s.length() - 1;

        while (i <= j) {

            if (!Character.isLetterOrDigit(s.charAt(i)))
                i += 1;
            else if (!Character.isLetterOrDigit(s.charAt(j)))
                j -= 1;
            else if (Character.toLowerCase(s.charAt(i)) != Character.toLowerCase(s.charAt(j)))
                return false;
            else {
                i += 1;
                j -= 1;
            }
        }
        return true;
    }
}

/**
 * Here's a more sophisticated two-pointer solution. Runtime of 2ms (faster than
 * 98.10%) and memory usage of 39.5mb (less than 41.84%)
 */