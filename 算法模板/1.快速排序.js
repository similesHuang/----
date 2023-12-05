function quick_sort(arr, left, right) {
  if (left >= right) return;
  let base = arr[left];
  //对边界进行拓展一位
  i = left - 1, j = right + 1;
  while (i < j) {
    do i++; while (arr[i] < base);
    do j--; while (arr[j] > base);
    //  进行交换
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  quick_sort(arr, left, j);
  quick_sort(arr, j + 1, right);
}
const a = [2, 1, 3, 3, 5];
quick_sort(a, 0, a.length - 1);
console.log(a);