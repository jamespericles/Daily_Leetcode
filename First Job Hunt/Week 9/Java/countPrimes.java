
/**
 * Prompt:
 * 
 * Count the number of primes numbers less than a non-negative number, n.
 * 
 * https://leetcode.com/problems/count-primes/
 */

class Solution {
    public int countPrimes(int n) {
        if (n <= 2)
            return 0;
        boolean[] sieve = new boolean[n];
        int answer = (n - 2) / 2;
        for (int i = 3; i * i <= n; i += 2) {
            if (sieve[i]) {
                continue;
            }
            for (int j = i * 3; j < n; j += i + i) {
                if (!sieve[j]) {
                    answer--;
                    sieve[j] = true;
                }
            }
        }
        return answer + 1;
    }
}

/**
 * Great stats using a Sieve-based solution. Runtime of 6ms (faster than 99.05%)
 * and memory usage of 37.6mb (less than 53.85%)
 */