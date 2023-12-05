const a = [1, 2, 2, 3, 3, 3, 3, 4];
//返回3的起始坐标和终止坐标，如果没有，则返回-1,-1。
//先找左边界，找第一个等于3的位置
function leftSearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let mid = parseInt(left + (right - left) / 2, 10);
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return left;
}
//找右边界,找最后一个等于3的位置
function rightSearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    let mid = parseInt(left + (right - left) / 2 + 1, 10);
    if (arr[mid] <= target) left = mid;
    else if (arr[mid] > target) right = mid - 1;
  }
  return right;
}
let right = rightSearch(a, 3);
let left = leftSearch(a, 3);
console.log(left, right);