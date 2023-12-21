/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
//总结：用了两层递归，思路与100.相同的树大致一样
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  let subTree = function (leftNode, rightNode) {
    if (!leftNode && !rightNode) return true;
    if (!leftNode || !rightNode) return false;
    if (leftNode.val !== rightNode.val) return false;
    let letResult = subTree(leftNode.left, rightNode.left);
    let rightResult = subTree(leftNode.right, rightNode.right);
    return letResult && rightResult;
  };
  if (subTree(root, subRoot)) {
    return true;
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
// @lc code=end

