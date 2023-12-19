/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];
  while (queue.length) {
    //记录当前队列的长度
    let levelLength = queue.length;
    // 记录当前层次的结果
    let levelResult = [];
    for (let i = 0; i < levelLength; i++) {
      let curNode = queue.shift();
      levelResult.push(curNode.val);
      //下一层节点进入队列;
      curNode.left && queue.push(curNode.left);
      curNode.right && queue.push(curNode.right);
    }
    //每一层结果存入数组
    result.push(levelResult);
  }
  return result;
};
// @lc code=end

