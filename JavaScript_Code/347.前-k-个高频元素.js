/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
//堆排序,本次解法不采用堆排序
var topKFrequent = function (nums, k) {
  //用哈希表存储每个元素出现的次数
  let map = new Map();
  let result = [];
  for (const item of nums) {
    map.set(item, (map.get(item) || 0) + 1);
  };
  let data = [...map.entries()];
  data.sort((a, b) => b[1] - a[1]);

  return data.slice(0, k).map(([item]) => {
    return item;
  });
};
// @lc code=end

