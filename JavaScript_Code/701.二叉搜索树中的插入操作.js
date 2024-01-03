/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
/*
var insertIntoBST = function (root, val) {
  //迭代法
  if (!root) {
    let node = new TreeNode(val);
    return node;
  }
  let cur = root;
  while (cur) {
    if (cur.val > val) {
      let pre = cur;
      cur = cur.left;
      if (!cur) {
        let node = new TreeNode(val);
        cur = node;
        pre.left = cur;
        break;
      }
    };
    if (cur.val < val) {
      let pre = cur;
      cur = cur.right;
      if (!cur) {
        let node = new TreeNode(val);
        cur = node;
        pre.right = cur;
        break
      }
    };
  };
  return root;

};
*/
//递归遍历
var insertIntoBST = function (root, val) {
  // 终止条件
  if (!root) {
    return new TreeNode(val);
  }
  // 根据值的大小选择左子树或右子树递归插入
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else if (root.val < val) {
    root.right = insertIntoBST(root.right, val);
  }

  return root;
};

// @lc code=end

