// TODO: Should Refactor
export const MinQueue = function() {
  this.queue = []
  this.assistQueue = []

  this.push = value => {
    const { queue, assistQueue } = this
    let i = assistQueue.length - 1
    while (i >= 0) {
      if (value < assistQueue[i]) {
        assistQueue.pop()
      }
      i--
    }

    if (
      !queue.length ||
      !assistQueue.length ||
      assistQueue[assistQueue.length - 1] < value
    ) {
      assistQueue.push(value)
    }

    queue.push(value)
  }

  this.shift = () => {
    const { queue, assistQueue } = this
    if (queue.length < 1) return
    if (queue[0] === assistQueue[0]) {
      assistQueue.shift()
    }
    queue.shift()
  }

  this.getMin = () => this.assistQueue[0]
}
