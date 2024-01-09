/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 非递减子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
  let result = [];
  let paths = [];
  let backTracking = function (startIndex) {
    if (paths.length >= 2) {
      result.push([...paths]);
    }
    //终止条件
    if (startIndex === nums.length) {
      return;
    };
    let used = [];
    for (let i = startIndex; i < nums.length; i++) {
      if (paths.length > 0 && paths[paths.length - 1] > nums[i] || used[nums[i]]) {
        continue;
      };
      paths.push(nums[i]);
      used[nums[i]] = true;
      backTracking(i + 1);
      paths.pop();
    }
  }
  backTracking(0);
  return result;
};
// @lc code=end

