/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  let getSum = function (node, curSum, targetSum) {
    //终止条件
    if (!node.left && !node.right) {
      if (curSum === targetSum) return true;
    }
    if (node.left) {
      curSum += node.left.val;
      let res = getSum(node.left, curSum, targetSum);
      if (res) return res;
      curSum -= node.left.val;
    };
    if (node.right) {
      curSum += node.right.val;
      let res = getSum(node.right, curSum, targetSum);
      if (res) return res;
      curSum -= node.right.val;
    };
    return false;
  }
  return getSum(root, root.val, targetSum);
};
// @lc code=end

