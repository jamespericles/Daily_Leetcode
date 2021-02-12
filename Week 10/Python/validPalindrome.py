
#   Prompt:

#   Given a string, determine if it is a palindrome, considering only
#   alphanumeric characters and ignoring cases.

#   Note: For the purpose of this problem, we define empty string as valid
#   palindrome.

#   https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isPalindrome(self, s: str) -> bool:
        stripped_s = "".join(e for e in s if e.isalnum()).lower()
        return True if (stripped_s == "".join(reversed(stripped_s))) else False
