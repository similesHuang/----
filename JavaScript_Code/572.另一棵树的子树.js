/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
//总结：用了两层递归，思路与100.相同的树大致一样
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  //先判断两个树是否是相同。
  let compare = function (leftTree, rightTree) {
    //递归终止条件
    if (!leftTree && !rightTree) return true; //两个节点都为空，返回true
    if (!leftTree || !rightTree) return false;//有一个节点不存在，返回false
    if (leftTree.val !== rightTree.val) return false;
    //进行递归
    let leftSide = compare(leftTree.left, rightTree.left);
    let rightSide = compare(leftTree.right, rightTree.right);
    return leftSide && rightSide;
  }
  if (compare(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
// @lc code=end

