/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];

  let dpArr = [];
  //初始化;
  dpArr[0] = nums[0];
  dpArr[1] = Math.max(nums[1], nums[0]);
  for (let i = 2; i < nums.length; i++) {
    dpArr[i] = Math.max(dpArr[i - 2] + nums[i], dpArr[i - 1]);
  }
  return dpArr[dpArr.length - 1];
};
// @lc code=end

