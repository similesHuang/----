/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  let paths = [];
  let backTrack = function (startIndex) {
    //终止条件
    result.push([...paths]);
    if (startIndex === nums.length) {
      return;
    }

    for (let i = startIndex; i < nums.length; i++) {
      paths.push(nums[i]);
      backTrack(i + 1);
      paths.pop();
    }
  }
  backTrack(0);
  return result;
};
// @lc code=end

