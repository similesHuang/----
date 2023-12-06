/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
var removeNthFromEnd = function (head, n) {
  let newList = new ListNode(0, head);
  let pre = newList;
  let cur = newList;
  for (let i = 0; i < n; i++) {
    cur = cur.next;
  }
  //cur指向最后一个节点
  while (cur.next) {
    pre = pre.next;
    cur = cur.next;
  }
  pre.next = pre.next.next;
  return newList.next;
};
// @lc code=end

