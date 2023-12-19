/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
/*
//递归法
var postorderTraversal = function (root) {
  let result = [];
  const dfs = function (root, result) {
    if (root === null) return;
    dfs(root.left, result);
    dfs(root.right, result);
    result.push(root.val);
  }
  dfs(root, result);
  return result;
};
*/
//迭代法
//左右中=》先求中右左，再反转一下就完成了
var postorderTraversal = function (root) {
  if (!root) return [];
  let stack = [root];
  let result = [];
  while (stack.length) {
    let node = stack.pop();
    result.push(node.val);
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);
  }
  return result.reverse();
}
// @lc code=end

