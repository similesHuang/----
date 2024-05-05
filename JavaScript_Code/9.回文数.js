/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let arrX = x.toString().split('');
  let left = 0, right = arrX.length - 1;
  while (left < right) {
    if (arrX[left] !== arrX[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
let result = isPalindrome(121);
console.log(result);
// @lc code=end

