export const MyQueue = function() {
  this.data = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.data.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.data.shift();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.data[0];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.data.length === 0;
};
