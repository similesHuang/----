/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  let result = [];
  let getResult = function (node, pathNodes) {
    //终止条件
    if (!node) return;
    if (!node.left && !node.right) {
      //将叶子节点加入pathNodes中
      pathNodes.push(node);
      let sum = 0;
      for (let pathNode of pathNodes) {
        sum += pathNode.val;
      };
      result.push(sum);
      return;
    };
    //中
    pathNodes.push(node);
    //左
    if (node.left) {
      getResult(node.left, pathNodes);
      pathNodes.pop();
    };
    //右
    if (node.right) {
      getResult(node.right, pathNodes);
      pathNodes.pop();
    };
  };
  getResult(root, []);
  if (result.includes(targetSum)) return true;
  return false;
};
// @lc code=end

