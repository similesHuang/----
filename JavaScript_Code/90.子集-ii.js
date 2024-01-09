/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = [];
  let paths = [];
  nums.sort((a, b) => a - b);
  let backTracking = function (startIndex) {
    //终止条件
    result.push([...paths]);
    if (startIndex === nums.length) {
      return;
    };
    for (let i = startIndex; i < nums.length; i++) {
      if (i !== startIndex && nums[i] === nums[i - 1]) {
        continue;
      }
      paths.push(nums[i]);
      backTracking(i + 1);
      paths.pop();
    }
  }
  backTracking(0);
  return result;
};
// @lc code=end

