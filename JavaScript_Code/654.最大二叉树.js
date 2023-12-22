/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
//终止条件：数组为空
var constructMaximumBinaryTree = function (nums) {

  let buildTree = function (nums) {
    //终止条件
    if (!nums.length) return null;
    let needs = -1;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > needs) {
        needs = nums[i];
      };
    };
    //构建根节点
    let root = new TreeNode(needs);
    //进行左右子树分割；
    let curIndex = nums.indexOf(needs);
    let leftTreeNums = nums.slice(0, curIndex);
    let rightTreeNums = nums.slice(curIndex + 1);
    //进行递归
    root.left = buildTree(leftTreeNums);
    root.right = buildTree(rightTreeNums);
    return root;
  };
  return buildTree(nums);
};
// @lc code=end

