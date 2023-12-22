/*
* @lc app=leetcode.cn id=106 lang=javascript
*
* [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  //终止条件：节点为空时，返回。返回值为当前节点。
  if (!postorder.length) return null;
  //第一步，确定根节点
  let curValue = postorder.pop();
  let root = new TreeNode(curValue);
  //分割点索引
  let index = inorder.indexOf(curValue);
  //左子树的前序和后序
  let leftInorder = inorder.slice(0, index);
  let leftPostorder = postorder.slice(0, index);
  //右子树的前序和后序
  let rightInorder = inorder.slice(index + 1);
  let rightPostorder = postorder.slice(index);
  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);
  return root;
};
// @lc code=end

