/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseStr(s, k) {
  const strArray = s.split('');

  for (let i = 0; i < strArray.length; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, strArray.length - 1);

    while (start < end) {
      const temp = strArray[start];
      strArray[start] = strArray[end];
      strArray[end] = temp;
      start++;
      end--;
    }
  }

  return strArray.join('');
}





// @lc code=end

