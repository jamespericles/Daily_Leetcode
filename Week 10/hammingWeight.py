
#   Prompt:

#   Write a function that takes an unsigned integer and returns the number of '1'
#   bits it has (also known as the Hamming weight).

#   https://leetcode.com/problems/number-of-1-bits/


class Solution:
    def hammingWeight(self, n: int) -> int:
        binary = bin(n)
        count = 0

        for char in binary:
            if (char == '1'):
                count += 1
        return count

# I love trying the same solutions using different languages. This solution had
# significantly better results than Java or JS. Runtime of 28ms (faster than 90.52%)
# and memory usage of 14.3mb (less than 7.97%)
