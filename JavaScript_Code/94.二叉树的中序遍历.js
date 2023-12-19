/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  let result = [];
  let dfs = function (root) {
    if (root === null) return;
    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
  };
  dfs(root)
  return result;
};
*/
//迭代法
var inorderTraversal = function (root) {
  //思路：将节点一路向左移入栈中
  if (!root) return [];
  let cur = root, stack = [];
  let result = [];
  while (cur || stack.length) {
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      cur = stack.pop();
      result.push(cur.val);
      cur = cur.right;
    }

  }
  return result;
}
// @lc code=end

