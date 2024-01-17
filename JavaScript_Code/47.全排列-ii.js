/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let result = [];
  let paths = [];
  let sortNums = nums.sort((a, b) => a - b);
  let backTracking = function (arr) {
    if (paths.length === nums.length) {
      result.push([...paths]);
    };
    //终止条件
    if (!arr.length) {
      return;
    };
    //标记还未使用的数组，下次递归，用它
    let used = [...arr];
    for (let i = 0; i < arr.length; i++) {
      if (i > 0 && arr[i - 1] === arr[i]) continue;
      paths.push(arr[i]);
      let newUsed = used.filter((_, index) => index !== i);
      backTracking([...newUsed]);
      paths.pop();
    }
  };
  backTracking(sortNums);
  return result;
};
// @lc code=end

