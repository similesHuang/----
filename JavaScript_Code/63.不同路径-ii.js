/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {

  //1.depArr存每个网格块有多少条路径
  let column = obstacleGrid[0].length;
  let row = obstacleGrid.length;
  if (obstacleGrid[row - 1][column - 1] === 1) return 0;
  let dpArr = Array.from({ length: row }, () => Array(column).fill(0));
  //初始化
  for (let i = 0; i < row; i++) {
    if (obstacleGrid[i][0] === 1) {
      break;
    }
    dpArr[i][0] = 1;
  };
  for (let j = 0; j < column; j++) {
    if (obstacleGrid[0][j] === 1) {
      break;
    };
    dpArr[0][j] = 1;
  };
  for (let i = 1; i < obstacleGrid.length; i++) {

    for (let j = 1; j < column; j++) {
      if (obstacleGrid[i][j - 1] === 1 && obstacleGrid[i - 1][j] === 1) {
        dpArr[i][j] = 0;
      };
      if (obstacleGrid[i][j - 1] === 1 && obstacleGrid[i - 1][j] != 1) {
        dpArr[i][j] = dpArr[i - 1][j];
      }
      if (obstacleGrid[i][j - 1] != 1 && obstacleGrid[i - 1][j] === 1) {
        dpArr[i][j] = dpArr[i][j - 1];
      }
      if (obstacleGrid[i][j - 1] != 1 && obstacleGrid[i - 1][j] != 1) {
        dpArr[i][j] = dpArr[i][j - 1] + dpArr[i - 1][j];
      }
    }
  };
  return dpArr[row - 1][column - 1]
};
// @lc code=end

