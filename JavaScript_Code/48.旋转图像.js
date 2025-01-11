/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  // 1.先按照对角线翻转
  // 2.然后将每行元素翻转
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    let left = 0,
      right = matrix[i].length - 1;
    while (left < right) {
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
      left++;
      right--;
    }
  }
  return matrix;
};
// @lc code=end
