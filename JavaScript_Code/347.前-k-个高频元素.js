/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} 
 * @return {number[]}
 */
//堆排序,本次解法不采用堆排序
/*
var topKFrequent = function (nums, k) {
  //用哈希表存储每个元素出现的次数
  let map = new Map();
  let result = [];
  for (const item of nums) {
    map.set(item, (map.get(item) || 0) + 1);
  };
  let data = [...map.entries()];
  data.sort((a, b) => b[1] - a[1]);

  return data.slice(0, k).map(([item]) => {
    return item;
  });
};
*/
// js 没有堆 需要自己构造
class Heap {
  constructor(compareFn) {
    this.compareFn = compareFn;//用来判断是大根堆还是小根堆
    this.queue = [];
  };
  //添加
  push(item) {
    this.queue.push(item);

    //找到其父节点
    let index = this.size() - 1;

    //向下取整
    let parent = Math.floor((index - 1) / 2);
    while (parent >= 0 && this.compare(parent, index) > 0) {
      let tmp = this.queue[parent];
      this.queue[parent] = this.queue[index];
      this.queue[index] = tmp;
      //更新下标，目的是为了逐层向上寻找。
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }

  }

  //堆顶元素出队列
  pop() {
    //堆顶和最后一个节点元素互换
    let out = this.queue[0];
    this.queue[0] = this.queue.pop();

    //从堆顶开始堆化
    let index = 0;//记录下沉元素下标
    let left = 1;


    return out;

  }

  // 使用传入的 compareFn 比较两个位置的元素
  compare(index1, index2) {
    // 处理下标越界问题
    if (this.queue[index1] === undefined) return 1;
    if (this.queue[index2] === undefined) return -1;

    return this.compareFn(this.queue[index1], this.queue[index2]);
  }

}

const topKFrequent = function (nums, k) {
  const map = new Map();

  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // 创建小顶堆
  const heap = new Heap((a, b) => a[1] - b[1]);

  // entry 是一个长度为2的数组，0位置存储key，1位置存储value
  for (const entry of map.entries()) {
    heap.push(entry);

    if (heap.size() > k) {
      heap.pop();
    }
  }

  // return heap.queue.map(e => e[0]);

  const res = [];

  for (let i = heap.size() - 1; i >= 0; i--) {
    res[i] = heap.pop()[0];
  }

  return res;
};
// @lc code=end

