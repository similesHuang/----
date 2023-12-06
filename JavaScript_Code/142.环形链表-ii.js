/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @param {ListNode} head
 * @return {ListNode}
 */

var detectCycle = function (head) {
  // 使用 Floyd's Tortoise and Hare 算法
  let slow = head, fast = head;
  let circle = false;
  //找到环里的相遇节点
  while (fast && fast.next) {
    //快指针移动两位，慢指针移动一位
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      circle = true;
      break;
    }
  };
  //找环入口;
  slow = head;
  if (circle) {
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  } else return null;
};

// @lc code=end

