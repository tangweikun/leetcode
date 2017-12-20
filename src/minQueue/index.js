export const MinQueue = function() {
  this.queue = []
  this.assistQueue = []

  this.push = value => {
    if (this.queue.length < 1) {
      this.queue.push(value)
      this.assistQueue.push(value)
    } else {
      let i = this.assistQueue.length - 1
      while (i >= 0) {
        if (value < this.assistQueue[i]) {
          this.assistQueue.shift()
        } else {
          this.assistQueue.push(value)
          i = 0
        }
        i--
      }

      this.queue.push(value)
    }
  }

  this.shift = value => {
    if (this.queue.length < 1) return
    if (value === this.assistQueue[0]) {
      this.assistQueue.shift()
    }
    this.queue.shift()
  }

  this.getMin = () => this.assistQueue[0]
}
