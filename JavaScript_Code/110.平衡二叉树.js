/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
//后序遍历
var isBalanced = function (root) {
  const getHeight = function (node) {
    // 终止条件
    if (!node) return 0;
    let leftHeight = getHeight(node.left);
    if (leftHeight === -1) return -1;
    let rightHeight = getHeight(node.right);
    if (rightHeight === -1) return -1;
    //中
    let result;
    if (Math.abs(leftHeight - rightHeight) > 1) result = -1;
    else {
      result = Math.max(leftHeight, rightHeight) + 1;
    }
    return result;
  }
  if (getHeight(root) === -1) return false;
  return true;
};
// @lc code=end

