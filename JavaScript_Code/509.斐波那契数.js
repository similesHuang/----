/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/*
var fib = function (n) {
  if (n == 1) return 1;
  function _fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n > 1) {
      return _fib(n - 1) + _fib(n - 2);
    }

  }
  let sum = _fib(n);
  return sum;
};
*/
var fib = function (n) {
  if (n <= 1) return n;
  // 1.确定dp数组下标和元素的关系
  let dpArr = [];
  //3.确定初始化
  dpArr[0] = 0;
  dpArr[1] = 1;
  //4.确定循环时从左到右，还是从右到左
  for (let i = 2; i <= n; i++) {
    //2.确实递推关系式
    dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
  };
  return dpArr[dpArr.length - 1];
};
// @lc code=end

