/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  let arr = nums.sort((a, b) => (a - b));
  let curLen = 1;
  let result = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] - arr[i - 1] === 1) {
        curLen++;
      } else {
        result = Math.max(result, curLen);
        curLen = 1;
      }
    }

  }
  return Math.max(result, curLen);
}
// @lc code=end

