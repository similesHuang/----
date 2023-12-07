/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
//暴力破解
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[j] + nums[i];
      if (sum === target) return [i, j];
    }
  }
  return null;
};
*/
var twoSum = function (nums, target) {
  //map:将值作为key,下标作为value;
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let searchValue = target - nums[i];
    //map没有要搜索的元素时
    if (!map.has(searchValue)) {
      //将遍历的元素放入map中
      map.set(nums[i], i);
    } else {
      return [i, map.get(searchValue)];
    }
  };
  return null;
};

// @lc code=end

