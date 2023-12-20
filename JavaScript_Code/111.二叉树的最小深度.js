/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @param {TreeNode} root
 * @return {number}
 */
//递归遍历
var minDepth = function (root) {
  //1.确定函数参数和返回值。参数为树节点，返回值为高度
  //2.确定终止条件。节点为null时，高度为0;
  if (!root) return 0;
  if (root.left && !root.right) return minDepth(root.left) + 1;
  if (root.right && !root.left) return minDepth(root.right) + 1;
  let leftSide = minDepth(root.left);
  let rightSide = minDepth(root.right);
  return Math.min(leftSide, rightSide) + 1;

};
// @lc code=end

