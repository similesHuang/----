/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dpArr = Array(amount + 1).fill(amount + 1);
  dpArr[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dpArr[i] = Math.min(dpArr[i], dpArr[i - coins[j]] + 1);
      }
    }
  };
  return dpArr[amount] > amount ? -1 : dpArr[amount];
};
// @lc code=end

