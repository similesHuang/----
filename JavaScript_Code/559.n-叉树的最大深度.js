/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
//后续遍历
/*
var maxDepth = function (root) {
  if (!root) return 0;
  //左
  let depth = 0;
  for (let child of root.children) {
    let d = maxDepth(child);
    if (d > depth) depth = d;
  };
  return depth + 1;
};
*/
//先序遍历
var maxDepth = function (root) {

  let maxDepth = 0;
  let depth = function (node, curDepth) {
    if (!node.left && !node.right) {
      if (curDepth > maxDepth) {
        maxDepth = curDepth;
      }
    };
    for (let child of node.children) {
      curDepth++;
      depth(child, curDepth);
      curDepth--;
    }
  };
  if (!root) return 0;
  depth(root, 1);
  return maxDepth;
}
// @lc code=end

