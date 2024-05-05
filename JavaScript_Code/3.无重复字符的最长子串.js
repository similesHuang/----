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
  let bestLength = 0;
  let result = [];
  let left = 0, right = 0;
  while (right < s.length) {
    //寻找最长
    result.push(s[right]);
    //不满足条件时
    while (hasDuplicate(result)) {
      result.shift();
      left++
    }
    bestLength = Math.max(bestLength, result.length);
    right++;
  }
  return bestLength;
};
// @lc code=end

