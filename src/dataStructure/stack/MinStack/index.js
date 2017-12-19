var MinStack = function() {
  this.stack = []

  this.pop = () => this.stack.pop()

  this.top = () =>
    this.stack[this.stack.length - 1] && this.stack[this.stack.length - 1].val

  this.getMin = () =>
    this.stack[this.stack.length - 1] && this.stack[this.stack.length - 1].min

  this.push = val => {
    const min =
      this.stack.length > 0
        ? this.stack[this.stack.length - 1].min
        : Number.MAX_SAFE_INTEGER
    this.stack.push({ val, min: Math.min(min, val) })
  }
}
