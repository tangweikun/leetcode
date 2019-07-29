// TODO: Should Refactor
export const MinQueue = function() {
  this.queue = [];
  this.assistQueue = [];
  this.getMin = () => this.assistQueue[0];

  this.push = value => {
    const { queue, assistQueue } = this;
    let i = assistQueue.length - 1;
    while (i >= 0) {
      value < assistQueue[i] && assistQueue.pop();
      i--;
    }

    if (!assistQueue.length || assistQueue[assistQueue.length - 1] < value) {
      assistQueue.push(value);
    }
    queue.push(value);
  };

  this.shift = () => {
    if (this.queue[0] === this.assistQueue[0]) this.assistQueue.shift();
    this.queue.shift();
  };
};
