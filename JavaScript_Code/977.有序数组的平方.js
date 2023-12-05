/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
//快速排序
const quickSort = (arr, left, right) => {
  if (left >= right) return;
  let base = arr[left];
  let i = left - 1, j = right + 1;
  while (i < j) {
    do i++; while (arr[i] < base);
    do j--; while (arr[j] > base);
    if (i < j) {
      let temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
    }
  }
  quickSort(arr, left, j);
  quickSort(arr, j + 1, right)
}

*/
//归并排序
/*function mergeSort(arr, left, right) {
  if (left >= right) return;
  //1.确定分界点
  let mid = Math.floor((left + (right - left) / 2));
  //2递归
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  //3 进行排序
  let k = 0, i = left, j = mid + 1, sortArr = [];
  while (i <= mid && j <= right) {
    if (arr[i] <= arr[j]) sortArr[k++] = arr[i++];
    else sortArr[k++] = arr[j++];
  }
  while (i <= mid) sortArr[k++] = arr[i++];
  while (j <= right) sortArr[k++] = arr[j++];
  //将排好序的数组的元素重新塞进原数组中
  for (i = left, j = 0; i <= right; i++, j++) arr[i] = sortArr[j];
}
*/
var sortedSquares = function (nums) {
  //双指针法
  let start = 0, end = nums.length - 1, k = nums.length - 1;
  let res = new Array(nums.length).fill(0);
  while (start <= end) {
    if (nums[start] * nums[start] > nums[end] * nums[end]) {
      res[k--] = nums[start] * nums[start];
      start++;
    } else if (nums[start] * nums[start] < nums[end] * nums[end]) {
      res[k--] = nums[end] * nums[end];
      end--;
    } else {
      res[k--] = nums[start] * nums[start];
      res[k--] = nums[end] * nums[end];
      start++;
      end--;
    }

  }
  return res;
};

// @lc code=end

