/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//创建一个栈

var backspaceCompare = function (s, t) {
  let startS = 0, startT = 0;
  let S = [];//s栈
  let T = [];//t栈
  while (startS < s.length) {
    if (s[startS] !== "#") {
      S.push(s[startS]);
    } else {
      S.pop();
    }
    startS++;
  }

  while (startT < t.length) {
    if (t[startT] !== "#") {
      T.push(t[startT]);
    } else {
      T.pop();
    }
    startT++;
  }

  let strS = S.join("");
  let strT = T.join("");
  if (strS == strT) return true;
  return false;
};
// @lc code=end

