/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start
function search(nums: number[], target: number): number {
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2 + 1); //寻找右边界时要+1;
    if (nums[mid] <= target) left = mid;
    else right = mid - 1;
  }
  if (nums[left] === target) return left;
  return -1;
}
// @lc code=end
