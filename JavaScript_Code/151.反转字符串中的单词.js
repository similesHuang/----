/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 反转字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let arrStr = s.split(' ');
  let newStr = [];
  for (let j = arrStr.length - 1; j >= 0; j--) {
    if (arrStr[j]) {
      newStr.push(arrStr[j]);
    }
  }
  return newStr.join(' ');
};
// @lc code=end

