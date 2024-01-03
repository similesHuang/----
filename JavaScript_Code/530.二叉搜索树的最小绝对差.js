/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
/*
var getMinimumDifference = function (root) {
  let midList = [];
  //中序遍历获得递增序列；
  let getMidList = function (root) {
    if (!root) return;
    getMidList(root.left);
    midList.push(root.val);
    getMidList(root.right);
  };
  getMidList(root);
  let start = 0, end = 1;
  let minValue = Infinity;
  while (end < midList.length) {
    if (Math.abs(midList[end] - midList[start]) < minValue) minValue = Math.abs(midList[end] - midList[start]);
    start++;
    end++;
  }
  return minValue;
};
*/
var getMinimumDifference = function (root) {
  let res = Infinity
  let preNode = null
  // 中序遍历
  const inorder = (node) => {
    if (!node) return
    inorder(node.left)
    // 更新res
    if (preNode) res = Math.min(res, node.val - preNode.val)
    // 记录前一个节点         
    preNode = node
    inorder(node.right)
  }
  inorder(root)
  return res;
}
// @lc code=end

