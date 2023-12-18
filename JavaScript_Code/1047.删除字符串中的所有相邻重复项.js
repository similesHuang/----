/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let stack = [];
  let arrStr = s.split('');
  let start = 1;
  stack.push(arrStr[0])
  while (start < arrStr.length) {
    let element = stack.pop();
    stack.push(element);
    if (arrStr[start] === element) {
      stack.pop();
    } else {
      stack.push(arrStr[start]);
    }
    start++;
  }
  return stack.join('');
};
// @lc code=end

