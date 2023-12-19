/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
//层次遍历
var rightSideView = function (root) {
  if (!root) return [];
  let result = [];
  let queue = [root];
  while (queue.length) {
    //记录当前长度
    let levelLength = queue.length;
    //记录最右侧节点
    let subResult = queue[levelLength - 1].val;
    //当前level的节点全部栈
    for (let i = 0; i < levelLength; i++) {
      let node = queue.shift();
      //将下一层节点入队列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    result.push(subResult);
  }
  return result;
};
// @lc code=end

