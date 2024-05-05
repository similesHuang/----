/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  let dpArr = [];//第i个元素存最大乘积
  let maxSum = 0;
  for (let i = 0; i <= n; i++) {
    if (i * (n - i) > maxSum) {
      maxSum = Math.max(maxSum, i * (n - i));
    }
  };
  dpArr[2] = maxSum;
};
// @lc code=end

