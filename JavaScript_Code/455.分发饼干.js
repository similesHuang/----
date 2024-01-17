/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  //先进行排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let sum = 0;
  while (s.length) {
    if (s[0] >= g[0]) {
      sum++;
      g.shift();
      s.shift();
    } else {
      s.shift();
    }
  };
  return sum;
};
// @lc code=end

