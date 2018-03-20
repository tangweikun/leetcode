const MinStackPro = function() {
  this.stack = []
  this.assistStack = []

  this.pop = () => {
    const { assistStack, stack } = this
    if (assistStack[assistStack.length - 1] === stack.length - 1) {
      assistStack.pop()
    }
    this.stack.pop()
  }

  this.top = () => this.stack[this.stack.length - 1]

  this.getMin = () => this.stack[this.assistStack[this.assistStack.length - 1]]

  this.push = value => {
    const { stack, assistStack } = this
    const min = stack[assistStack[assistStack.length - 1]]

    if (!assistStack.length || value < min) {
      assistStack.push(stack.length)
    }
    stack.push(value)
  }
}
