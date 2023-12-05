/*
 * @lc app=leetcode.cn id=1816 lang=typescript
 *
 * [1816] 截断句子
 */

// @lc code=start
function truncateSentence(s: string, k: number): string {
  let start = 0,
    end = 0;
  //用于存储单词
  let arr: string[] = [];
  while (start < s.length && end < s.length) {
    while (end < s.length && s[end] !== ' ') end++;
    let str = s.substring(start, end);
    arr.push(str);
    start = end + 1;
    end = end + 1;
  }
  let str = arr.slice(0, k).join(' ');
  return str;
}
// @lc code=end
