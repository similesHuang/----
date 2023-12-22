/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  //终止条件
  if (!root1 && !root2) return null;
  //进行赋值
  let root = new TreeNode(0);
  if (root1) root.val += root1.val; // 将 root1 的值加到新节点上
  if (root2) root.val += root2.val; // 将 root2 的值加到新节点上
  root.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
  root.right = mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null);
  return root;
};
// @lc code=end

