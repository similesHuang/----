/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
};
var removeElements = function (head, val) {
  //方法一：返回原始链表
  //在原链表中删除元素
  //处理头节点为空或头节点
  /*
  while (head !== null && head.val === val) head = head.next;
  if (head === null) return head;
  let pre = head, current = head.next;
  while (current) {
    if (current.val === val) {
      pre.next = current.next;
    } else {
      pre = pre.next;
    }
    current = current.next;
  }
  return head;
  */
  // 法2：创建虚拟头节点
  let newList = new ListNode(0, head);

  let current = newList.next;
  let pre = newList;
  while (current) {
    if (current.val === val) {
      pre.next = current.next;
    } else {
      pre = pre.next;
    }
    current = current.next;
  }
  return newList.next;
};
// @lc code=end

