/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */

var isValidBST = function (root) {
  //中序遍历
  let result = [];
  let getMidValues = function (root) {
    if (!root) return null;
    getMidValues(root.left);
    result.push(root.val);
    getMidValues(root.right);
  };
  getMidValues(root);
  let start = 0, end = 1;
  if (result.length === 1) return true;
  while (end < result.length) {
    if (result[start] >= result[end]) return false;
    start++;
    end++;
  };
  return true;
};


// @lc code=end

