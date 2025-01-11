/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

/**
 * 
 * 滑动窗口解法
 * 思路：
 * 维护一个滑动窗口，当窗口满足字串p的时候，记录窗口起始索引。
 * 如何判断窗口是否满足。用哈希表存字串元素，key代表元素，value为次数
 */


var findAnagrams = function (s, p) {
  let map = new Map();
  let result = [];
  for (let i = 0; i < p.length; i++) {
    map.set(p[i], (map.get(p[i]) || 0) + 1);
  };
  let left = 0, right = 0, count = map.size;
  while (right < s.length) {
    //如果当前元素在map中
    if (map.has(s[right])) {
      map.set(s[right], map.get(s[right]) - 1);
      if (map.get(s[right]) === 0) {
        count--;
      }
    }
    while (count === 0) {
      if (right - left + 1 === p.length) {
        result.push(left);
      }
      // 调整窗口左边界，如果left对应元素在map中，则map中left对应元素个数应该加1；
      if (map.has(s[left])) {
        map.set(s[left], map.get(s[left]) + 1);
        if (map.get(s[left]) > 0) count++;
      }
      left++;
    }
    right++;
  }
  return result;
};
// @lc code=end

