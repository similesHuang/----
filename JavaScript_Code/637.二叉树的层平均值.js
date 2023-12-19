/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  if (!root) return [];

  let queue = [root], result = [];
  while (queue.length) {
    let levelSum = 0;
    let levelLength = queue.length;
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      levelSum += node.val;
      //将下一层节点入队列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(levelSum / levelLength);
  };
  return result;
};
// @lc code=end

