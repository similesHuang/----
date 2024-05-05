/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function (head) {
  let ret = new ListNode(0);
  ret.next = head;
  let temp = ret;
  while (temp.next && temp.next.next) {
    let node1 = temp.next;
    let node2 = temp.next.next.next;
    //步骤一
    temp.next = temp.next.next;
    //步骤2
    temp.next.next = node1;
    //步骤3
    temp.next.next.next = node2;
    temp = temp.next.next;

  }
  return ret.next;

};
// @lc code=end

