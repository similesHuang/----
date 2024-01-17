/*
 * @lc app=leetcode.cn id=332 lang=javascript
 *
 * [332] 重新安排行程
 */

// @lc code=start
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let result = ['JFK'];
  let paths = [];
  let backTracking = function (arr) {
    //终止条件
    if (!tickets.length) {
      result.push(...paths);
      return;
    };
    let used = [...arr];
    for (let i = 0; i < arr.length; i++) {

    }
  }
};
// @lc code=end

