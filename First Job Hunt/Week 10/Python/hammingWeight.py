
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


class Solution:
    def hammingWeight(self, n: int) -> int:
        binary = bin(n).replace('0', '')
        count = 0

        for char in binary:
            if (char == '1'):
                count += 1
        return count

# Minor drop in runtime efficiency but a huge jump in memory efficiency. Runtime of
# 32ms (faster than 75.66%) and memory usage of 14.3mb (less than 43.36%)


class Solution:
    def hammingWeight(self, n: int) -> int:
        binary = bin(n).replace('0', '')

        return len(binary) - 1

# Similar to the final Java solution but this solution comes with a much larger improvement
# to the statistics. Runtime of 28ms (less than 90.52%) and memory usage of 14.2mb (less than 71.73%)
