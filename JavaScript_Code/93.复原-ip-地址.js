/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];
  let paths = [];
  let length = s.length;
  let backTracking = function (startIndex) {
    //终止条件
    let subLength = paths.length;
    if (subLength > 4) return;
    if (subLength === 4 && startIndex === length) {
      result.push(paths.join('.'));
      return;
    }
    for (let i = startIndex; i < length; i++) {
      let str = s.slice(startIndex, i + 1);
      if (str.length > 3 || parseInt(str, 10) > 255) break;
      if (str[0] === '0' && str.length > 1) break;
      paths.push(str);
      backTracking(i + 1);
      paths.pop();
    }
  }
  backTracking(0);
  return result;
};
// @lc code=end

