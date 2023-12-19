/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (!root) return null;
  let queue = [root];
  while (queue.length) {
    let level = queue.length;
    for (let i = 0; i < level; i++) {
      let node = queue.shift();
      if (i < level - 1) {
        node.next = queue[0];
      };
      //下一层节点入队列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return root;
};
// @lc code=end

