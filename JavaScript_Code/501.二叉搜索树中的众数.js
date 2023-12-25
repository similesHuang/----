/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
/*
var findMode = function (root) {
  let map = new Map();
  let getValue = function (root) {
    if (!root) return;
    map.set(root.val, (map.get(root.val) || 0) + 1);
    getValue(root.left);
    getValue(root.right);
  };
  getValue(root);
  let maxCount = Math.max(...map.values());
  let res = [];
  for (let [key, value] of map) {
    if (value === maxCount) res.push(key);
  }
  return res;
};
*/

//中序遍历
var findMode = function (root) {
  // 不使用额外空间，使用中序遍历,设置出现最大次数初始值为1
  let maxCount = 1;
  let count = 0;
  let pre = null;
  let res = [];
  let getCount = function (cur) {
    if (!cur) return;
    //前
    getCount(cur.left);
    //单层递归逻辑
    if (pre && pre.val === cur.val) {
      count++;
    } else {
      count = 1;
    };
    //记录前指针
    pre = cur;
    if (count === maxCount) {
      res.push(cur.val)
    };
    if (count > maxCount) {
      maxCount = count;
      res = [];
      res.push(cur.val);
    };
    getCount(cur.right);
  };
  getCount(root);
  return res;
}
// @lc code=end

