/*
 * @lc app=leetcode.cn id=367 lang=typescript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
function isPerfectSquare(num: number): boolean {
  //仍然是寻找右边界
  let left = 0,right = num / 2;
  while(left < right) {
    let mid  = Math.floor(left + (right-left)/2+1);
    if(mid*mid<=num) left = mid;
    else right = mid-1;
  }
  let flag =false;
  left*left ===num?  flag =true: flag =false;
  return flag;
}
// @lc code=end
