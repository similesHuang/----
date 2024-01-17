/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let paths = [];
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
      paths.push(arr[i]);
      let newUsed = used.filter(item => item !== arr[i]);
      backTracking([...newUsed]);
      paths.pop();
    }
  };
  backTracking(nums);
  return result;
};
// @lc code=end

