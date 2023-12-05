/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
function hasDuplicate(collection) {
  const set = new Set(collection);
  return set.size !== collection.length;
}
var lengthOfLongestSubstring = function (s) {
  //最长套用模板1
  let left = 0, right = 0, maxLength = 0;
  let result = [];
  while (right < s.length) {
    result.push(s[right]);
    //不满足条件时
    while (hasDuplicate(result)) {
      result.shift();
      left++;
    }
    //更新最长长度
    maxLength = result.length > maxLength ? result.length : maxLength;
    right++;
  }

  return maxLength;
};
// @lc code=end

