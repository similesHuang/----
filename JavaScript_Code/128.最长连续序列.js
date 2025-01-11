/*
 * @lc app=leetcode.cn id=128 lang=javascript
 *
 * [128] 最长连续序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/*
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  let arr = nums.sort((a, b) => (a - b));
  let curLen = 1;
  let result = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      if (arr[i] - arr[i - 1] === 1) {
        curLen++;
      } else {
        result = Math.max(result, curLen);
        curLen = 1;
      }
    }

  }
  return Math.max(result, curLen);
}
*/

/*
思路：每个数都判断一次这个数是不是连续序列的开头那个数。

怎么判断呢，就是用哈希表查找这个数前面一个数是否存在，即num-1在序列中是否存在。存在那这个数肯定不是开头，直接跳过。
因此只需要对每个开头的数进行循环，直到这个序列不再连续，因此复杂度是O(n)。 以题解中的序列举例:

*/
var longestConsecutive = function (nums) {
  // 用哈希存储每一个数
  const set = new Set();
  // 存入哈希表中
  nums.forEach((num) => {
    set.add(num)
  })
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let curLength = 0;
    // 判断当前数是否是起始序列
    if (!set.has(nums[i] - 1)) {
      curValue = nums[i];
      while (set.has(curValue)) {
        curLength++;
        curValue++;
      }
      result = Math.max(result, curLength);
    } else {
      continue;
    }
  }
  return result;
}
// @lc code=end

