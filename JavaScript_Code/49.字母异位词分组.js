/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let item of strs) {
    let arr = Array.from(item);
    let key = arr.sort().toString();
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(item);
    map.set(key, list);
  };
  return Array.from(map.values());
};
// @lc code=end

