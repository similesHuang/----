/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
//先序遍历。返回值:无
var binaryTreePaths = function (root) {
  //递归遍历+递归三部曲
  let result = [];
  let getPath = function (node, pathNodes) {
    //终止条件 ，叶子节点也要加入
    if (!node.left && !node.right) {
      let path = '';
      for (const item of pathNodes) {
        path += item.val + "->";
      };
      path += node.val;
      result.push(path);
      pathNodes.push(node);
      return;
    }
    //中
    pathNodes.push(node);
    //左
    if (node.left) {
      getPath(node.left, pathNodes);
      pathNodes.pop();
    };
    //右
    if (node.right) {
      getPath(node.right, pathNodes);
      pathNodes.pop();
    }
  }
  getPath(root, []);
  return result;
};
// @lc code=end

