// 每一趟排序
function sort(arr, left, right) {
  let i = left;
  let j = right;
  let temp = arr[left];
  while (i !== j) {
    while (temp <= arr[j] && i < j) {
      j--; //j右移
    }
    while (temp >= add[i] && i < j) {
      i++; // i左移
    }
    if (i < j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; //两两交换位置
    }
  }
  // 此时 i,j相遇，进行数字交换
  arr[left] = arr[i];
  arr[i] = temp;
  return i; //返回这个交汇点
}
function quickSort(arr, left, right) {}
