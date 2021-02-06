/**
 * Given two arrays, write a function to compute their intersection.
 *
 * Example 1: Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2,2]
 *
 * Example 2: Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] Output: [4,9]
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

class Solution {
    public int[] intersect(int[] nums1, int[] nums2) {
        Map<Integer, Integer> numbers = new HashMap<>();
        for (int i : nums1) {
            // put all numbers of nums1 in map
            numbers.put(i, numbers.getOrDefault(i, 0) + 1);
        }
        int a = 0;
        ArrayList<Integer> list = new ArrayList<>();
        for (int i = 0; i < nums2.length; ++i) {
            // if map(nums1) matches with the number of nums2
            if (numbers.containsKey(nums2[i])) {
                a = numbers.get(nums2[i]);
                // we will check frequency of the number if its 1 or greater than 1 than we will
                // simply add the number in list because it is in both Map(nums1) and nums2
                if (a >= 1) {
                    list.add(nums2[i]);
                    // reduce frequency by 1
                    numbers.put(nums2[i], --a);
                }
                continue;
            }

        }
        // we will convert the list into array
        int arr[] = new int[list.size()];
        for (int i = 0; i < list.size(); ++i) {
            arr[i] = list.get(i);
        }
        return arr;

    }
}

/**
 * Great results for this hash map solution. Runtime of 2ms (faster than 95.88%)
 * and memory usage of 38.9mb (less than 94.61%)
 */