/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
// 右中左,无返回值，前后指针
var convertBST = function (root) {
  let pre = 0;
  let addTree = function (cur) {
    if (!cur) return;
    //右
    addTree(cur.right);
    //中
    cur.val += pre;
    pre = cur.val;
    //左
    addTree(cur.left);
  }
  addTree(root);
  return root;
};
// @lc code=end

