/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let start = 0, end = 0;
  while (start < nums.length && end < nums.length) {
    if (nums[end] !== 0) {
      nums[start++] = nums[end];
    }
    end++;
  }
  for (let i = start; i < end; i++) {
    nums[i] = 0;
  }
};
// @lc code=end

