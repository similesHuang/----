function merge_sort(arr, left, right) {

  if (left >= right) return;
  //1.确定分界点
  let mid = parseInt(left + (right - left) / 2, 10);
  //2.递归排序
  merge_sort(arr, left, mid);
  merge_sort(arr, mid + 1, right);
  //3归并两个有序数组
  let k = 0, i = left, j = mid + 1;
  while (i <= mid && j <= right) {
    if (arr[i] < arr[j]) sortArr[k++] = arr[i++];
    else sortArr[k++] = arr[j++];
  };
  while (i <= mid) sortArr[k++] = arr[i++];
  while (j <= right) sortArr[k++] = arr[j++];
  //将排好序的数组的元素重新塞进原数组中
  for (i = left, j = 0; i <= right; i++, j++) arr[i] = sortArr[j];
}
//声明一个空数组，用于合并排好序的数组
let sortArr = [];
let arr = [6, 10, 2, 10, 2, 3,];
merge_sort(arr, 0, arr.length - 1);
console.log(arr);

