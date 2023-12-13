/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //采用栈结构
  let arrS = s.split('');
  let stack = [];
  for (let item of arrS) {
    if (item === '(' || item === '{' || item === '[') {
      stack.push(item);
      continue;
    };
    if (item === ')' && stack.pop() !== '(') return false;
    if (item === '}' && stack.pop() !== '{') return false;
    if (item === ']' && stack.pop() !== '[') return false;
  }
  if (stack.length) return false;
  return true;
};
// @lc code=end

