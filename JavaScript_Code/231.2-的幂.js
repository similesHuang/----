/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  //终止条件
  if (n == 1) return true;
  if (n % 2 !== 0) return false;
  return isPowerOfTwo(n >> 1);
};
// @lc code=end

