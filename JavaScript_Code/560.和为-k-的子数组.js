/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 暴力解法
/**
 * 思路：
 * 1.遍历数组，当前遍历下表为i
 * 2.然后第二轮遍历，从i开始往左遍历，枚举出符合条件的子数组个数
 */
/*var subarraySum = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j >= 0; j--) {
      sum += nums[j];
      if (sum === k) {
        count++;

      }
    }
  }
  return count;
};*/
/**
 * 前缀和+哈希表优化
 * 思路：优化枚举带来不必要的重复遍历。
 *  1.用哈希存储当前位置i所在元素的前缀和，key为和，value为出现的次数
 *  2.如果（当前元素的前缀和-k）的值出现在哈希表中，则子数组数量增加
 * 3.如果不在，
 * 4.如果当前元素前缀和在哈希表中，则哈希表中对应的value+1；
 * 5.如果不在，则将当前元素的前缀和加入哈希表中
 */

var subarraySum = function (nums, k) {
  let map = new Map();
  // 初始化前缀和，因为开始时，前缀和为0,出现次数为0
  map.set(0, 1); // 必须初始化，否则无法pass  case[1,1]
  let pre = 0,
    result = 0;
  for (let num of nums) {
    pre += num;
    if (map.has(pre - k)) {
      result += map.get(pre - k);
    }
    if (map.has(pre)) {
      map.set(pre, map.get(pre) + 1);
    } else {
      map.set(pre, 1);
    }
  }
  return result;
};
// @lc code=end
