/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  let paths = [];
  let arr = candidates.sort((a, b) => a - b);
  let backTrackIng = function (startIndex, curSum) {
    //终止条件
    if (curSum === target) {
      result.push([...paths]);
      return;
    }
    if (curSum > target) return;
    for (let i = startIndex; i < arr.length; i++) {
      // 避免重复
      if (i > startIndex && arr[i] === arr[i - 1]) {
        continue;
      }
      curSum += arr[i];
      paths.push(arr[i]);
      // 递归
      backTrackIng(i + 1, curSum);
      // 回溯
      curSum -= arr[i];
      paths.pop();
    };
  }
  backTrackIng(0, 0);
  return result;
};
// @lc code=end

