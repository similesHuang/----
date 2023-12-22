/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  //终止条件
  if (!preorder.length) return null;
  //前序遍历弹出第一个节点，就是根节点;
  let curValue = preorder.shift();
  let root = new TreeNode(curValue);
  //root在中序的位置
  let curIndex = inorder.indexOf(curValue);
  //左子树的前序序列和中序序列；
  let leftPreorder = preorder.slice(0, curIndex);
  let leftInorder = inorder.slice(0, curIndex);
  //右子树的前序序列和中序序列
  let rightPreorder = preorder.slice(curIndex);
  let rightInorder = inorder.slice(curIndex + 1);
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  return root;
};
// @lc code=end

