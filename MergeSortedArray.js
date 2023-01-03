/*
  https://leetcode.com/problems/merge-sorted-array
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    if(!m) {
        for(let i = 0; i < n; i++) {
            nums1[i] = nums2[i]
        }
    }
    else if(n) {
        for(let i = 0, j = 0; i < m+n && j < n;) {
            if(nums1[i] < nums2[j]) {
                if(nums1[i] == 0 && i >= m + j)
                    nums1.splice(i, 1, nums2[j++])
                i++
            }
            else if(nums1[i] > nums2[j]) {
                nums1.splice(i++, 0, nums2[j++])
                nums1.pop()
            }
            else {
                if(nums1[i] == 0 && i >= m + j)
                    nums1.splice(i++, 1, nums2[j++])
                else {
                    nums1.splice(i, 0, nums2[j++])
                    nums1.pop()
                    i+=2
                }
            }
        }
    }
};
