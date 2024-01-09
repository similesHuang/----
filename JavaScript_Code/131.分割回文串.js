/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function (s) {
  let result = [];
  let paths = [];
  let len = s.length;
  let backTracking = function (startIndex) {
    //终止条件
    if (startIndex === len) {
      result.push(Array.from(paths));
      return;
    }
    for (let i = startIndex; i < len; i++) {
      let str = s.slice(startIndex, i + 1);
      if (!revert(str)) {
        continue;
      }
      paths.push(str);
      backTracking(i + 1);
      paths.pop();
    }
  }
  backTracking(0);
  return result;
};
//判断数组是否是回文
function revert(s) {
  let l = 0, r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;

}
// @lc code=end

