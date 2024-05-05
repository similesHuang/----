/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m == 1 && n == 1) return 1;
  //存到达每个方块有几种方案
  let dpArr = Array.from({ length: m + 1 }, () => Array(n + 1).fill(undefined));
  //初始化
  for (let j = 1; j <= n; j++) {
    dpArr[1][j] = 1;
  }
  for (let i = 1; i <= m; i++) {
    dpArr[i][1] = 1;
  }
  //遍历顺序
  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      dpArr[i][j] = dpArr[i - 1][j] + dpArr[i][j - 1];
    }
  }
  return dpArr[m][n];
};
// @lc code=end

