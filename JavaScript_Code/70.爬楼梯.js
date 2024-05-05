/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //1.确定dp数组下标和元素
  let dpArr = [];
  //初始化
  dpArr[1] = 1;
  dpArr[2] = 2;
  //从左到右
  for (let i = 3; i <= n; i++) {
    dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
  };
  return dpArr[n];
};
// @lc code=end

