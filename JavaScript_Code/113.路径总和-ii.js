/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let resultPaths = [];//存储路径;
  let resultSums = [];//存储路径的和;
  let getPaths = function (node, pathNodes) {
    // 终止条件
    if (!node) return;
    if (!node.left && !node.right) {
      pathNodes.push(node);
      let path = [];//当前路径
      let sum = 0; //当前和
      for (const node of pathNodes) {
        sum += node.val;
        path.push(node.val);
      };
      resultSums.push(sum);
      resultPaths.push(path);
      return;
    }
    //中
    pathNodes.push(node);
    if (node.left) {
      getPaths(node.left, pathNodes);
      pathNodes.pop();
    }
    if (node.right) {
      getPaths(node.right, pathNodes);
      pathNodes.pop();
    }
  };
  getPaths(root, []);
  let needResult = [];
  for (let i = 0; i < resultPaths.length; i++) {
    if (resultSums[i] === targetSum) {
      needResult.push(resultPaths[i]);
    };
  };
  return needResult;
}
// @lc code=end

