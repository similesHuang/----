/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 * 
 * @solution 排序+双指针（注意去重）
 */
var threeSum = function (nums) {
  let result = [];
  // 排序
  const sortNums = nums.sort((a, b) => a - b);
  // 遍历
  for (let i = 0; i < sortNums.length; i++) {
    if (sortNums[i] > 0) return result;
    // 煎枝，有重复元素时,跳过这个i的处理
    if (i > 0 && sortNums[i] === sortNums[i - 1]) continue;// 这里为啥时i-1?而不是i+1；
    // 双指针
    let left = i + 1, right = sortNums.length - 1;
    while (left < right) {
      let sum = sortNums[i] + sortNums[left] + sortNums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        result.push([sortNums[i], sortNums[left], sortNums[right]]);
        // 剪枝处理
        while (left < right && sortNums[left] === sortNums[left + 1]) left++;
        while (left < right && sortNums[right] === sortNums[right - 1]) right--;
        left++;
        right--;
      }
    }

  }
  return result;
};
// @lc code=end

