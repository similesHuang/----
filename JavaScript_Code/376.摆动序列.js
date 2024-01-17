/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  if (nums.length < 2) {
    return nums.length;
  };
  let result = 1;
  let preDiff = nums[1] - nums[0];
  if (preDiff !== 0) {
    result++;
  }
  for (let i = 2; i < nums.length; i++) {
    let curDiff = nums[i] - nums[i - 1];
    if (curDiff > 0 && preDiff <= 0 || curDiff < 0 && preDiff >= 0) {
      result++;
      preDiff = curDiff;

    }

  }
  return result;
};
// @lc  code=end

