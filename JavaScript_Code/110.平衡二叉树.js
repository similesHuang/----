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
  const getHeight = function (root) {
    //终止条件
    if (!root) return 0;
    let leftHeight = getHeight(root.left);
    if (leftHeight === -1) return -1;//-1代表不符合平衡二叉树
    let rightHeight = getHeight(root.right);
    if (rightHeight === -1) return -1;
    let result;//result记录是否符合的平衡二叉树
    //左右子树高度差大于1，返回-1；
    if (Math.abs(leftHeight - rightHeight) > 1) result = -1;
    else result = Math.max(leftHeight, rightHeight) + 1;//左右子树符合，则当前节点高度为较大的子树+1
    return result;
  }
  let result = getHeight(root);
  if (result === -1) return false;
  else return true;
};
// @lc code=end

