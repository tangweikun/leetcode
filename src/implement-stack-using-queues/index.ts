export const MyStack = function() {
  this.data = []
}

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  return this.data.push(x)
}

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.data.pop()
}

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.data[this.data.length - 1]
}

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.data.length === 0
}
