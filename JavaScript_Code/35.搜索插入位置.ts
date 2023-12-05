/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  //寻找右边界
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2 + 1);
    if (nums[mid] <= target) left = mid;
    else right = mid - 1;
  }
  if (nums[left] < target) return left + 1;
  return left;
}
// @lc code=end
