/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  for (let item of tokens) {
    if (!isNaN(item)) {
      stack.push(parseInt(item, 10));
      continue;
    }
    switch (item) {
      case '+': {
        let a1 = stack.pop(), a2 = stack.pop();
        stack.push(a2 + a1);
        break;
      }
      case '-': {
        let a1 = stack.pop(), a2 = stack.pop();
        stack.push(a2 - a1);
        break;
      }
      case '*': {
        let a1 = stack.pop(), a2 = stack.pop();
        stack.push(a2 * a1);
        break;
      }
      case '/': {
        let a1 = stack.pop(), a2 = stack.pop();
        stack.push(Math.trunc(a2 / a1)); // Use Math.trunc instead of Math.floor
        break;
      }
      default:
        break;
    }
  }
  return stack.pop();
};

// @lc code=end

