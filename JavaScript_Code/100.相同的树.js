/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
//先序遍历
var isSameTree = function (p, q) {
  //终止条件
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  let left = isSameTree(p.left, q.left);
  let right = isSameTree(p.right, q.right);
  //中
  return left && right;
};
// @lc code=end

