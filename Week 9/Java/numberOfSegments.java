/**
 * Prompt:
 * 
 * You are given a string s, return the number of segments in the string.
 * 
 * A segment is defined to be a contiguous sequence of non-space characters.
 * 
 * https://leetcode.com/problems/number-of-segments-in-a-string/
 */

class Solution {
    public int countSegments(String s) {
        // first check if s is empty, we have to do this manually because otherwise the
        // below solution will return 1 rather than 0
        if (s.isBlank())
            return 0;

        int count = 0;
        String[] arr = s.split(" ");
        for (String v : arr) {
            if (!v.trim().isBlank())
                count++;
        }
        return count;
    }
}

/**
 * Great stats on this O(N) solution. Runtime of 0ms (faster than 100.00%) and
 * memory usage of 36.6mb (less than 87.76%)
 */