/*
 * @lc app=leetcode.cn id=1844 lang=javascript
 *
 * [1844] 将所有数字用字符替换
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let arrStr = Array.from(s);
  let pre = 0, cur = 1;
  while (cur < arrStr.length) {
    arrStr[cur] = shift(arrStr[pre], parseInt(arrStr[cur]), 10);
    pre = pre + 2;
    cur = cur + 2;

  }
  return arrStr.join('');
};
function shift(s, i) {
  const code = s.charCodeAt(0);
  return String.fromCharCode(((code - 97 + i) % 26 + 26) % 26 + 97);
}

// @lc code=end

