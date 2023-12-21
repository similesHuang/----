/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
//后续遍历
var isSymmetric = function (root) {
  if (!root) return true;
  //后序遍历
  let isMirror = function (leftNode, rightNode) {
    //终止条件
    if (!leftNode && !rightNode) return true;
    if (!leftNode || !rightNode) return false;
    if (leftNode.val !== rightNode.val) return false;
    let left = isMirror(leftNode.left, rightNode.right);
    let right = isMirror(leftNode.right, rightNode.left);
    return left && right;
  };
  return isMirror(root.left, root.right);
};
// @lc code=end

