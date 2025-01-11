/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let dummyNode = new ListNode(0); // 初始化一个占位节点
  let cur = dummyNode;
  let flag = 0; // 进位标志

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0; // 如果 l1 存在取 l1.val，否则取 0
    const val2 = l2 ? l2.val : 0; // 如果 l2 存在取 l2.val，否则取 0
    const sum = val1 + val2 + flag; // 当前节点和加上进位

    flag = Math.floor(sum / 10); // 更新进位
    cur.next = new ListNode(sum % 10); // 创建新节点存储当前位
    cur = cur.next; // 移动到下一个节点

    if (l1) l1 = l1.next; // 移动 l1 指针
    if (l2) l2 = l2.next; // 移动 l2 指针
  }

  if (flag > 0) {
    cur.next = new ListNode(flag); // 如果还有进位，追加一个新节点
  }

  return dummyNode.next; // 返回结果链表
};

// @lc code=end
