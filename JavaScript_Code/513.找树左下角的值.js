/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
  //层序遍历
  let queue = [root];
  let result = [];
  while (queue.length) {
    let length = queue.length;
    result.push(queue[0].val);
    for (let i = 0; i < length; i++) {
      let node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    };
  };
  let m = result.pop();
  return m;

};
*/
//递归法
var findBottomLeftValue = function (root) {

  let dfs = function (node, depth) {
    //终止条件
    if (!node.left && !node.right) {
      if (depth > maxDepth) {
        maxDepth = depth;
        result = node.val;
      };
      return;
    };
    if (node.left) {
      depth++;
      dfs(node.left, depth);
      depth--;
    };
    if (node.right) {
      depth++;
      dfs(node.right, depth);
      depth--;
    }
  };
  if (!root) {
    return 0;
  }
  let result = root.val;
  let maxDepth = 1;
  dfs(root, 1);
  return result;
};




// @lc code=end

