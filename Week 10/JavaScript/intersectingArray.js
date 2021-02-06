/**
 * Given two arrays, write a function to compute their intersection.
 *
 * Example 1:
 *      Input: nums1 = [1,2,2,1], nums2 = [2,2]
 *      Output: [2,2]
 *
 * Example 2:
 *      Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 *      Output: [4,9]
 *
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

let intersect = (nums1, nums2) => {
  let base, sub;

  if (nums1.length > nums2.length) {
    base = nums1;
    sub = nums2;
  } else {
    base = nums2;
    sub = nums1;
  }

  let res = [];
  for (let i = 0; i < sub.length; i++) {
    if (base.includes(sub[i])) {
      res.push(sub[i]);
      base[base.indexOf(sub[i])] = null;
    }
  }
  return res;
};

/**
 * Pretty great stats on this one! Runtime of 80ms (faster than 83.99%) and
 * memory usage of 38.6mb (less than 98.10%)
 */
