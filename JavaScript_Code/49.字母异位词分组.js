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
  let map = new Map();
  for (let str of strs) {
    let arr = Array.from(str);
    let key = arr.sort().toString();
    if (map.get(key)) {
      let list = map.get(key);
      list.push(str);
      map.set(key, list)
    } else {
      let list = [];
      list.push(str)
      map.set(key, list)
    }
  }
  let result = Array.from(map.values())
  return result
};
// @lc code=end

