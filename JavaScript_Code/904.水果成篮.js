/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  //求最长，用模板1，当不满足条件时，左指针右移，在外部更新最好结果。
  let start = 0, end = 0, result = 0;
  //记录每个字段出现的次数
  let fruitCount = new Map();
  while (end < fruits.length) {
    //加入end元素，更新当前记录。
    fruitCount.set(fruits[end], (fruitCount.get(fruits[end]) || 0) + 1);
    //不满足条件时
    while (fruitCount.size > 2) {
      //窗口缩小，移除左指针指向的元素。
      //这里只有当左指针所指向的元素的个数为0时，才是真正的缩小窗口
      fruitCount.set(fruits[start], fruitCount.get(fruits[start]) - 1);
      if (fruitCount.get(fruits[start]) === 0) {
        fruitCount.delete(fruits[start]);
      }
      start++;
    }

    result = Math.max(result, end - start + 1);
    end++;
  }

  return result;
};
// @lc code=end

