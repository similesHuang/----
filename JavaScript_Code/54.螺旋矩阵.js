/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * 首先设定上下左右边界
其次向右移动到最右，此时第一行因为已经使用过了，可以将其从图中删去，体现在代码中就是重新定义上边界
判断若重新定义后，上下边界交错，表明螺旋矩阵遍历结束，跳出循环，返回答案
若上下边界不交错，则遍历还未结束，接着向下向左向上移动，操作过程与第一，二步同理
不断循环以上步骤，直到某两条边界交错，跳出循环，返回答案
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];
  // 赋值上下左右边界
  let upper = 0;
  let down = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;
  while (true) {
    for (let i = left; i <= right; i++) result.push(matrix[upper][i]); // 先从上左-》上右遍历
    upper++; //重新设定上边界
    if (upper > down) break; // 如果上边界大于下边界，结束

    for (let i = upper; i <= down; i++) result.push(matrix[i][right]); // 上右-》下右
    right--;
    if (right < left) break;

    for (let i = right; i >= left; i--) {
      // 下右-》下左
      result.push(matrix[down][i]);
    }
    down--;
    if (down < upper) break;
    for (let i = down; i >= upper; i--) {
      //下左=》上左
      result.push(matrix[i][left]);
    }
    left++;
    if (left > right) break;
  }
  return result;
};
// @lc code=end
