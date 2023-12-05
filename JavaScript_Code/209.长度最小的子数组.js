/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
/*
var minSubArrayLen = function (target, nums) {
  //暴力破解
  let result = 1000000; // 最终的结果
  let subLength = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum >= target) {
        subLength = j - i + 1;
        result = result < subLength ? result : subLength;
        break;
      }
    }
  }
  return result == 1000000 ? 0 : result;
};
*/
var minSubArrayLen = function (target, nums) {
  //寻找最短：套用模板2
  let left = 0, right = 0, result = 0, bestResult = Infinity;
  while (right < nums.length) {
    result += nums[right];
    while (result >= target) {
      bestResult = Math.min(bestResult, right - left + 1);
      result -= nums[left];
      left++;
    }
    right++;
  }
  return bestResult == Infinity ? 0 : bestResult;
};
// @lc code=end

