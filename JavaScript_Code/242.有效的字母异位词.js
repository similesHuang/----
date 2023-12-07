/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let mapT = new Map();
  for (const item of t) {
    mapT.set(item, (mapT.get(item) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (mapT.has(s[i])) {
      mapT.set(s[i], mapT.get(s[i]) - 1);
      if (mapT.get(s[i]) === 0) {
        mapT.delete(s[i]);
      }
    } else return false;
  }
  if (mapT.size === 0) return true;
  return false;
};
// @lc code=end

