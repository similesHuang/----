/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let start = 0, end = height.length - 1;
  let maxRiver = (end - start) * (Math.min(height[end], height[start]));
  while (start < end) {
    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    };
    maxRiver = Math.max(maxRiver, (end - start) * Math.min(height[start], height[end]));
  };
  return maxRiver;
};
// @lc code=end

