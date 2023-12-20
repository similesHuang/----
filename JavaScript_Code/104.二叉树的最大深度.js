/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
//递归法
var maxDepth = function (root) {
  //1.确定递归的参数和返回值，参数为树的各个节点，返回值为高度数；
  //2.确定终止条件。当root===null，return 0;
  //3.单层递归逻辑
  if (!root) return 0;
  //左子树的最大宽度
  let maxLeft = maxDepth(root.left);
  //右子树的最大深度
  let maxRight = maxDepth(root.right);
  //返回值+1
  return Math.max(maxLeft, maxRight) + 1;
}

// @lc code=end

