/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  //终止条件
  if (nums.length === 0) return null;
  //找到中间值，构造根节点
  let mid = Math.floor((nums.length) / 2);
  let rootVal = nums[mid];
  let root = new TreeNode(rootVal);
  //分割左右子树
  let leftNodes = nums.slice(0, mid);
  let rightNodes = nums.slice(mid + 1);
  root.left = sortedArrayToBST(leftNodes);
  root.right = sortedArrayToBST(rightNodes);
  return root;
};
// @lc code=end

