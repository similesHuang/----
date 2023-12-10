/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // 先用map存储magazine每个字符出现的次数
  let mapMagazine = new Map();
  for (let item of magazine) {
    mapMagazine.set(item, (mapMagazine.get(item) || 0) + 1);
  }
  for (let item of ransomNote) {
    if (mapMagazine.has(item)) {
      mapMagazine.set(item, mapMagazine.get(item) - 1);
      if (mapMagazine.get(item) === 0) {
        mapMagazine.delete(item);
      }
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

