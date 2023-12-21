/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
var sumOfLeftLeaves = function (root) {
  //先序遍历递归法
  let sum = 0;
  let getNumber = function (node) {
    //终止条件
    if (!node) return;
    //中
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    };
    getNumber(node.left);
    getNumber(node.right);
  };
  getNumber(root);
  return sum;
};


// @lc code=end

