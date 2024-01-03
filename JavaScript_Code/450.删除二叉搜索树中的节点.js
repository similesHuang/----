/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  //终止条件
  if (!root) return null;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
    return root;
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
    return root;
  } else {
    //删除节点无孩子
    if (!root.left && !root.right) {
      return null;
    };
    // 删除节点只有左孩子或右孩子
    if (!root.left && root.right) {
      return root.right;
    } else if (root.left && !root.right) {
      return root.left;
    }
    //删除节点左右孩子都存在
    if (root.left && root.right) {
      //找到右子树最小节点
      const minNode = getMinNode(root.right);
      //将最小节点的值赋值给当前root节点
      root.val = minNode.val;
      //删除最小节点
      root.right = deleteNode(root.right, minNode.val);
      return root;
    }
  }
};
function getMinNode(node) {
  while (node.left) {
    node = node.left;
  };
  return node;
}
// @lc code=end

