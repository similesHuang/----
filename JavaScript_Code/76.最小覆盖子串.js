/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  const targetMap = new Map();
  //存储t的每个字符串
  for (let i = 0; i < t.length; i++) {
    targetMap.set(t[i], (targetMap.get(t[i]) || 0) + 1);
  }
  let start = 0, end = 0;
  let currentLength = t.length;
  let bestStr = '';
  //套用寻找最小模板
  while (end < s.length) {
    //s中有t中的元素
    if (targetMap.has(s[end])) {
      // 将map中对应字段出现的次数减1;
      targetMap.set(s[end], targetMap.get(s[end]) - 1);
      //这里必须是>=0，举个例子：targetMap有1个'm'元素，滑动窗口中有m元素了，则targetMap("m")=0,此时，currentLength要减1；
      if (targetMap.get(s[end]) >= 0) {
        currentLength--;
      }
    }
    while (currentLength === 0) {
      //将当前符合条件的字符串保存
      const currentStr = s.substring(start, end + 1);
      if (bestStr === '' || currentStr.length < bestStr.length) {
        bestStr = currentStr;
      }
      //start向右移
      const startChar = s[start];
      if (targetMap.has(startChar)) {
        targetMap.set(startChar, targetMap.get(startChar) + 1);
        if (targetMap.get(startChar) > 0) {
          currentLength++;
        }
      }
      start++;
    }
    end++;
  }
  return bestStr;
};

// @lc code=end

