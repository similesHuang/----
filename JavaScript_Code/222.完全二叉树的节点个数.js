/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
//法1：层序遍历
/*
var countNodes = function (root) {
  if (!root) return 0;
  let queue = [root];
  let sum = 0;
  while (queue.length) {
    let length = queue.length;
    let subSum = length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      //下一层节点入队列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    sum += subSum;
  }
  return sum;
};
*/
//法2递归后序遍历
var countNodes = function (root) {
  if (!root) return 0;
  let leftSum = countNodes(root.left);
  let rightSum = countNodes(root.right);
  return leftSum + rightSum + 1;
}
// @lc code=end

