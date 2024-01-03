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
  if (!digits.length) {
    return [];
  }
  let result = [];
  let paths = [];
  let size = digits.length;
  let map = getMap();
  let backTrack = function (digits, startIndex) {
    if (paths.length === size) {
      result.push(paths.join(''));
      return;
    };
    //获取字段第一个元素
    let startKey = digits[startIndex];
    let arr = map.get(startKey);
    for (let item of arr) {
      paths.push(item);
      backTrack(digits, startIndex + 1);
      paths.pop();
    }
  }
  backTrack(digits, 0);
  return result;
};
// @lc code=end

