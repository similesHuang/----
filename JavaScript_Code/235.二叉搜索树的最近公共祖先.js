/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
  let cur = null;
  let getAncestor = function (root, p, q) {
    //终止条件
    if (root.val === p.val || root.val === q.val) cur = root;
    if (root.val > p.val && root.val < q.val) cur = root;
    if (root.val < p.val && root.val > q.val) cur = root;
    if (root.val > p.val && root.val > q.val) getAncestor(root.left, p, q);
    if (root.val < p.val && root.val < q.val) getAncestor(root.right, p, q);
  };
  getAncestor(root, p, q);
  return cur;
};
// @lc code=end

