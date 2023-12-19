/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  let queue = [root], result = [];
  while (queue.length) {
    let length = queue.length;
    let levelResult = [];
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      levelResult.push(node.val);
      //下一层节点入队列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(levelResult);
  }
  return result.reverse();
};
// @lc code=end

