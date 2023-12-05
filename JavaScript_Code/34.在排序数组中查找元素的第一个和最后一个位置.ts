/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  let result: number[] = [];

  let left = 0,
    right = nums.length - 1;
  //先寻找左边界，mid不用加1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] >= target) right = mid;
    else left = mid + 1;
  }
  nums[left] === target ? result.push(left) : result.push(-1);

  (left = 0), (right = nums.length - 1);
  //再寻找右边界，mid要+1
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2 + 1);
    if (nums[mid] <= target) left = mid;
    else right = mid - 1;
  }
  nums[left] === target ? result.push(left) : result.push(-1);
  return result;
}
// @lc code=end
