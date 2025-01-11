/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/*
 解题思路
    1.先将矩阵中为0的元素对象的行列索引做标记
    2.然后再遍历这个矩阵，如果当前行和列被标记了，就把对应元素给置空。 
*/
var setZeroes = function (matrix) {
  // 将0 的位置做标记
  let m = matrix.length;
  let n = matrix[0].length;
  let row = new Array(m).fill(false);
  let column = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        column[j] = true;
      }
    }
  }
  // 遍历，如果包含在标记的行列里，将里面的元素置为0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || column[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix
};
// @lc code=end

