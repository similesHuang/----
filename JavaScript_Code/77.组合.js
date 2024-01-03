/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */

var combine = function (n, k) {
  let result = [];//
  let path = [];
  let backTrack = function (n, k, startIndex) {
    //终止条件
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      //处理节点
      path.push(i);
      //进入递归
      backTrack(n, k, i + 1);
      //回溯
      path.pop();
    }
  }
  backTrack(n, k, 1);
  return result;
};
// @lc code=end

