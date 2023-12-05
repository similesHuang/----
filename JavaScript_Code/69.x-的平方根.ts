/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
  let left = 0;
  let right = x / 2;
  //寻找右边界
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2 + 1);
    if (mid * mid <= x) left = mid;
    else right = mid - 1;
  }
  return left;
}
// @lc code=end
