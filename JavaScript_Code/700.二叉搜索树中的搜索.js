/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  //终止条件
  if (!root) return null;
  //先序遍历
  //中
  if (root.val === val) return root;
  let rightNode = null;
  if (root.val < val) {
    rightNode = searchBST(root.right, val);
  };
  let leftNode = null;
  if (root.val > val) {
    leftNode = searchBST(root.left, val);
  };
  return leftNode || rightNode;
};
// @lc code=end

