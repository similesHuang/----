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
var threeSum = function (nums) {
  let result = [];
  //1.先对nums进行排序；
  let arr = nums.sort((a, b) => a - b);
  //进行遍历
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) return result;//
    //进行去重，这里注意要对比i下标左边的元素，因为对比右边会影响left
    if (i > 0 && arr[i - 1] === arr[i]) {
      continue;
    }
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      if (arr[i] + arr[left] + arr[right] > 0) right--;
      else if (arr[i] + arr[left] + arr[right] < 0) left++;
      else {
        result.push([arr[i], arr[left], arr[right]]);
        // 去重
        while (left < right && nums[left] == nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] == nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }
  return result;
};
// @lc code=end

