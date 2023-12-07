/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let sumMap = new Map();
  let sum = n;
  sumMap.set(sum, 1);
  while (sumMap.get(sum) <= 1) {
    sum = getSum(sum);
    if (sum === 1) return true;
    sumMap.set(sum, (sumMap.get(sum) || 0) + 1);
  }
  return false;
};
function getSum(n) {
  let sum = 0;
  while (n) {
    sum += (n % 10) * (n % 10);
    n = Math.floor(n / 10);
  }
  return sum;
}
// @lc code=end

