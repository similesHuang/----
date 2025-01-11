/*
 * @lc app=leetcode.cn id=2928 lang=javascript
 *
 * [2928] 给小朋友们分糖果 I
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */
/**
 * 枚举法，第一个小朋友分x个糖果，第二个小朋友分y个，则第三个分n-x-y个
 */
// var distributeCandies = function (n, limit) {
//   let result = 0;
//   for (let i = 0; i <= limit; i++) {
//     for (let j = 0; j <= limit; j++) {
//       if (i + j > n) break;
//       if ((n - i - j) <= limit) result++;
//     }
//   }
//   return result;
// };

// 回溯法
var distributeCandies = function (n, limit) {
  let result = [];
  function backtracking(n, limit, startIndex, path, count) {
    if (count === n) {
      result.push([...path]);
      return;
    }
    // 三个孩子，遍历三个节点即可
    for (let i = startIndex; i < 3; i++) {
      if (path[i] >= limit) continue;
      path[i] += 1; //
      count++;
      backtracking(n, limit, i, path, count);
      // 回溯
      path[i] -= 1;
      count--;
    }
  }
  backtracking(n, limit, 0, [0, 0, 0], 0);
  return result.length;
};

// @lc code=end

