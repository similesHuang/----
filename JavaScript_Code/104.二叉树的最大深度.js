/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
//递归法
var maxDepth = function (root) {
  //先序遍历
  let maxDepth = 0;
  let dfs = function (root, curDepth) {
    //终止条件
    if (!root.left && !root.right) {
      if (curDepth > maxDepth) {
        maxDepth = curDepth;
      }
    };
    if (root.left) {
      curDepth++;
      dfs(root.left, curDepth);
      curDepth--;
    }
    if (root.right) {
      curDepth++;
      dfs(root.right, curDepth);
      curDepth--;
    }
  };
  if (!root) return 0;
  dfs(root, 1);
  return maxDepth;
}

// @lc code=end

