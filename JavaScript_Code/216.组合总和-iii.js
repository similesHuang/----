/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let result = [];
  let path = [];
  let backTrack = function (k, n, startIndex) {
    //终止条件
    if (path.length === k) {
      let curSum = 0;
      for (const item of path) {
        curSum += item;
      };
      if (curSum === n) {
        result.push([...path]);
      }
      return;
    };
    for (let i = startIndex; i <= 9; i++) {
      //处理节点
      path.push(i);
      backTrack(k, n, i + 1);
      //回溯
      path.pop();
    }
  }
  backTrack(k, n, 1);
  return result;
};
// @lc code=end

