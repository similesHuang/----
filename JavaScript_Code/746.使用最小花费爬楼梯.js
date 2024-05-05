/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  //1.确定dp数组含义：第i个楼梯花费最小的费用。
  let dpArr = [];
  //初始化
  dpArr[0] = 0;
  dpArr[1] = 0;
  //从左到右
  for (let i = 2; i <= cost.length; i++) {
    dpArr[i] = Math.min(dpArr[i - 2] + cost[i - 2], dpArr[i - 1] + cost[i - 1]);
  };
  return dpArr[cost.length];
};
// @lc code=end

