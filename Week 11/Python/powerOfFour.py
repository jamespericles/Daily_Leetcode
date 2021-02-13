
#  Prompt:

#  Given an integer n, return true if it is a power of four. Otherwise, return
#  false.

#  https://leetcode.com/problems/power-of-four/

import math


class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
            return False

        i = math.log(n) / math.log(4)

        return i == math.floor(i)

# Best results of the three in terms of actual runtime and memory usage.
# Runtime of 32ms (faster than 66.11%) and memory usage of 14.3mb (less than 6.17%)
