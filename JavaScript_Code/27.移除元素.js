/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 双指针法，直接套模板
  let start = 0, end = 0;
  while (start < nums.length && end < nums.length) {
    while (end < nums.length && nums[end] !== val) {
      nums[start] = nums[end];
      end++;
      start++;
    }
    end++;
  }
  return start;
};
// @lc code=end

