/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null) return head;
  let pre = head;
  let cur = head.next;
  let target = null;
  while (cur) {
    target = cur.next;
    cur.next = pre;
    if (cur.next === head) {
      pre.next = null;
    }
    pre = cur;
    cur = target;
  }
  return pre;
};
// @lc code=end

