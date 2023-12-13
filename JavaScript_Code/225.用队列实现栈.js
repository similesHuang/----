/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function () {
  this.queueIn = [];
  this.queueOut = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.queueIn.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  //两个栈必须有一个栈为空
  if (this.queueIn.length) {
    while (this.queueIn.length > 1) {
      this.queueOut.push(this.queueIn.shift());
    }
    return this.queueIn.shift();
  }
  if (this.queueOut.length) {
    while (this.queueOut.length > 1) {
      this.queueIn.push(this.queueOut.shift());
    }
    return this.queueOut.shift();
  }
  return 0;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  const x = this.pop();
  this.queueIn.push(x);
  return x;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return (this.queueIn.length === 0 && this.queueOut.length === 0) ? true : false;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

