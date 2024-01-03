/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  let paths = [];

  let backTrack = function (startIndex, currentSum) {
    // 终止条件
    if (currentSum === target) {
      result.push([...paths]);
      return;
    }
    if (currentSum > target) {
      return;
    }

    // 从startIndex开始，遍历candidates数组
    for (let i = startIndex; i < candidates.length; i++) {
      // 处理节点
      paths.push(candidates[i]);
      currentSum += candidates[i];
      backTrack(i, currentSum); // 递归调用，startIndex保持不变，currentSum更新
      // 回溯
      currentSum -= candidates[i];
      paths.pop();
    }
  };

  backTrack(0, 0);
  return result;

};
// @lc code=end

