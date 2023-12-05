/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let start = 0, end = 1;
  while (start < nums.length && end < nums.length) {
    if (nums[start] !== nums[end]) {
      start++;
      nums[start] = nums[end];
    }
    end++;
  }
  return start + 1;
};
// @lc code=end

