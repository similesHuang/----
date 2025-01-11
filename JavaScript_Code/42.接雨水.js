/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * 
 * 暴力破解
1. 初始化ans = 0。
2.从左到右遍历height:
   ●初始化left_ max = 0, right_ _max = 0。
   ●从height[0]到当前位置寻找最大值left_ max = max(height[j], left_ max)。
   ●从当前位置到height末端寻找最大值right_ max = max(height[j], right_ max)。
   ●ans = ans + min(left_ max, right_ max) - height[i]。
-时间复杂度: O(n2) 空间复杂度: 0(1)
 */
/*
var trap = function (height) {

  let result = 0;
  //  遍历
  for (let i = 0; i < height.length; i++) {
    // 初始化
    let left_max = 0, right_max = 0;
    // 在i的左边以及i寻找最大height;
    for (let j = 0; j <= i; j++) {
      left_max = Math.max(left_max, height[j]);
    }
    // 在i及i的右边寻找最大height;
    for (let j = i; j < height.length; j++) {
      right_max = Math.max(right_max, height[j]);
    }
    result += Math.min(right_max, left_max) - height[i];
  }
  return result;
};
*/

/**
 * 动态规划，递推关系式：leftMax[i]=max(leftMax[i−1],height[i])；
 * 提前遍历一遍，存每个柱子左边的最大高度，每个柱子右边的最大高度。
 * 然后每个柱子接的雨水为 min(leftMax[i],rightMax[i])-height[i];
 */
/*
var trap = function (height) {
  let result = 0;
  let left_max = new Array(height.length).fill(0);
  left_max[0] = height[0];
  for (let i = 1; i < height.length; i++) {
    left_max[i] = Math.max(left_max[i - 1], height[i]);
  }
  let right_max = new Array(height.length).fill(0);
  right_max[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--) {
    right_max[i] = Math.max(right_max[i + 1], height[i]);
  }
  for (let i = 0; i < height.length; i++) {
    result += Math.min(left_max[i], right_max[i]) - height[i];
  }
  return result;
};
*/
/**
 * 
 * 单调栈
 * 维护一个单调栈，栈内存储元素的下标，保证下标对应的height单调递减。
 * 
 * 
 */
var trap = function (height) {
  let sortStack = [];
  let result = 0;
  for (let i = 0; i < height.length; i++) {

    // 处理单调栈
    while (sortStack.length && height[sortStack[sortStack.length - 1]] < height[i]) {
      const top = sortStack.pop();
      if (!sortStack.length) {
        break;
      }
      const left = sortStack[sortStack.length - 1];
      const curWidth = i - left - 1;
      const curHeight = Math.min(height[left], height[i]) - height[top];
      result += curWidth * curHeight;
    }

    sortStack.push(i);
  }
  return result
};
// @lc code=end

