/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  let map = new Map();
  let getValue = function (root) {
    if (!root) return;
    map.set(root.val, (map.get(root.val) || 0) + 1);
    getValue(root.left);
    getValue(root.right);
  };
  getValue(root);
  let maxCount = Math.max(...map.values());
  let res = [];
  for (let [key, value] of map) {
    if (value === maxCount) res.push(key);
  }
  return res;
};
// @lc code=end

