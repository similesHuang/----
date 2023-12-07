/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let mapNums1 = new Map();
  let result = [];
  for (let item of nums1) {
    mapNums1.set(item, (mapNums1.get(item) || 0) + 1);
  };
  for (let item of nums2) {
    if (mapNums1.get(item)) {
      result.push(item);
      mapNums1.set(item, mapNums1.get(item) - 1);
    } else {
      mapNums1.delete(item);
    }
  }
  return result;
};
// @lc code=end

