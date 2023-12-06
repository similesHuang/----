/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lengthA = getLinkListLength(headA);
  let lengthB = getLinkListLength(headB);
  let reduce = Math.abs(lengthA - lengthB);
  let pointA = headA;
  let pointB = headB;
  if (lengthA < lengthB) {
    for (let i = 0; i < reduce; i++) {
      pointB = pointB.next;
    }
  } else {
    for (let i = 0; i < reduce; i++) {
      pointA = pointA.next;
    }
  }
  while (pointA && pointA !== pointB) {  // 遍历curA 和 curB，遇到相同则直接返回
    pointA = pointA.next;
    pointB = pointB.next;
  }
  return pointA;
};
//定义一个函数，求链表长度
function getLinkListLength(head) {
  let i = 0;
  let newList = new ListNode(0, head);
  let cur = newList.next;
  while (cur) {
    i++;
    cur = cur.next;
  }
  return i;
}
// @lc code=end

