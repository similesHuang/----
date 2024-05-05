/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  let v1Arr = version1.split(".");
  let v2Arr = version2.split(".");
  for (let i = 0; i < v1Arr.length || i < v2Arr.length; i++) {
    let number1 = Number(v1Arr[i] || 0);
    let number2 = Number(v2Arr[i] || 0);
    if (number1 < number2) {
      return -1;
    }
    if (number1 > number2) {
      return 1;
    }
  }
  return 0;
};
// @lc code=end

