/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let getAncestor = function (root, p, q) {
    //终止条件
    if (!root || root === p || root === q) return root;
    //左右
    let left = getAncestor(root.left, p, q);
    let right = getAncestor(root.right, p, q);
    //中
    if (!left && right) return right;
    else if (left && !right) return left;
    else if (!left && !right) return null;
    else return root;
  };
  let parent = getAncestor(root, p, q);
  return parent;
};
// @lc code=end

