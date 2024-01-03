/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
//先序遍历。返回值:无
var binaryTreePaths = function (root) {
  //先序遍历,回溯
  let results = [];
  let getPaths = function (cur, nodes) {
    if (!cur.left && !cur.right) {
      let result = '';
      for (const item of nodes) {
        result += item + "->";
      }
      result += cur.val;
      results.push(result);
    };
    if (cur.left) {
      nodes.push(cur.val);
      getPaths(cur.left, nodes);
      //回溯
      nodes.pop();
    }
    if (cur.right) {
      nodes.push(cur.val);
      getPaths(cur.right, nodes);
      nodes.pop()
    }
  }
  getPaths(root, []);
  return results;

};
// @lc code=end

