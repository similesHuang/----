/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 我的解法
/* 
var intersection = function (nums1, nums2) {
  let map1 = new Map();
  let result = [];
  for (const item1 of nums1) {
    if (!map1.has(map1.get(item1))) {
      map1.set(item1, item1);
    }
  };
  for (const item of nums2) {
    if (map1.has(item) && !result.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
*/
//法2：用set集合存储更好，因为Set集合一定不会有重复的元素，相比map还要判断是否有重复元素要更好。
var intersection = function (nums1, nums2) {
  let result = new Set();
  let set1 = new Set(nums1);
  for (let item of nums2) {
    if (set1.has(item)) {
      result.add(item)
    }
  }
  return Array.from(result);
};
// @lc code=end

