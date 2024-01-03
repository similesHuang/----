/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
//创建映射关系
function getMap() {
  let phoneNumberMap = new Map();
  phoneNumberMap.set('9', ['w', 'x', 'y', 'z']);
  phoneNumberMap.set('2', ['a', 'b', 'c']);
  phoneNumberMap.set('3', ['d', 'e', 'f']);
  phoneNumberMap.set('4', ['g', 'h', 'i']);
  phoneNumberMap.set('5', ['j', 'k', 'l']);
  phoneNumberMap.set('6', ['m', 'n', 'o']);
  phoneNumberMap.set('7', ['p', 'q', 'r', 's']);
  phoneNumberMap.set('8', ['t', 'u', 'v']);
  return phoneNumberMap;
}
var letterCombinations = function (digits) {
  //先将其转为数组
  let digitsArr = Array.from(digits);
  let size = digitsArr.length;
  if (digitsArr.length === 0) {
    return []
  }
  let result = [];
  let path = [];
  let map = getMap();
  let backTrack = function (arr, size) {
    //终止条件
    if (path.length === size) {
      result.push(path.join(''));
      return;
    }
    let key = arr.shift();
    let mapValues = map.get(key);
    for (let item of mapValues) {
      path.push(item);
      backTrack(arr, size);
      path.pop();
    }
  }
  backTrack(digitsArr, size);
  return result;
};
// @lc code=end

