/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  //遍历链表
  let cur = head;
  let count = 1;

  //记录每组起始和终止节点
  let start = cur, end = null;
  while (cur) {
    if (count % k === 0) {
      //反转
      end = cur;
      reverseList(start, end);
      start = start.next;
    } else {

      count++;
      cur = cur.next;
    }

  }
};
function reverseList(start, end, head) {
  let tail = end.next;
  let pre = start;
  let cur = start.next;
  let target = null;
  while (cur !== end) {
    target = cur.next;
    cur.next = pre;
    if (cur.next === head) {
      pre.next = null;
    }
    pre = cur;
    cur = target;
  }
  start.next = tail;

}
// @lc code=end

