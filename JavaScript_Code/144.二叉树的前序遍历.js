/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
//递归法
/*
var preorderTraversal = function (root) {
  let result = [];
  const dfs = function (root) {
    if (root === null) return;
    result.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return result;
};
*/
//迭代法
var preorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root];
  let result = []
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    node.right && stack.push(node.right);
    node.left && stack.push(node.left);
  }
  return result;
};
// @lc code=end

