/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {

  let dpArr = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    dpArr[i] = i;//最坏情况
    for (let j = 1; j * j <= i; j++) {
      dpArr[i] = Math.min(dpArr[i], dpArr[i - j * j] + 1)
    };
  };
  return dpArr[n];


};
// @lc code=end

