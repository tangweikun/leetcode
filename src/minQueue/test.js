import { MinQueue } from '.'

// TODO: Use async/await to rewrite
describe('MinQueue-push', () => {
  const Queue_1 = new MinQueue()
  Queue_1.push(0)
  it('-->1', () => {
    expect(Queue_1.getMin()).toBe(0)
  })
  it('-->2', () => {
    expect(Queue_1.queue).toEqual([0])
  })
  it('-->3', () => {
    expect(Queue_1.assistQueue).toEqual([0])
  })
})

describe('MinQueue-push', () => {
  const Queue_2 = new MinQueue()
  Queue_2.push(0)
  Queue_2.push(1)
  Queue_2.push(2)
  it('-->4', () => {
    expect(Queue_2.getMin()).toBe(0)
  })
  it('-->5', () => {
    expect(Queue_2.queue).toEqual([0, 1, 2])
  })
  it('-->6', () => {
    expect(Queue_2.assistQueue).toEqual([0, 1, 2])
  })
})

describe('MinQueue-push', () => {
  const Queue_3 = new MinQueue()
  Queue_3.push(0)
  Queue_3.push(1)
  Queue_3.push(2)
  Queue_3.push(-1)
  it('-->7', () => {
    expect(Queue_3.getMin()).toBe(-1)
  })
  it('-->8', () => {
    expect(Queue_3.queue).toEqual([0, 1, 2, -1])
  })
  it('-->9', () => {
    expect(Queue_3.assistQueue).toEqual([-1])
  })
})

describe('MinQueue-push', () => {
  const Queue_4 = new MinQueue()
  Queue_4.push(0)
  Queue_4.push(1)
  Queue_4.push(2)
  Queue_4.push(-1)
  Queue_4.push(0)
  it('-->10', () => {
    expect(Queue_4.getMin()).toBe(-1)
  })
  it('-->11', () => {
    expect(Queue_4.queue).toEqual([0, 1, 2, -1, 0])
  })
  it('-->12', () => {
    expect(Queue_4.assistQueue).toEqual([-1, 0])
  })
})

describe('MinQueue-shift', () => {
  const Queue_4 = new MinQueue()
  Queue_4.push(0)
  Queue_4.push(1)
  Queue_4.push(2)
  Queue_4.push(-1)
  Queue_4.push(0)
  Queue_4.shift()
  it('-->13', () => {
    expect(Queue_4.getMin()).toBe(-1)
  })
  it('-->14', () => {
    expect(Queue_4.queue).toEqual([1, 2, -1, 0])
  })
  it('-->15', () => {
    expect(Queue_4.assistQueue).toEqual([-1, 0])
  })
})

describe('MinQueue-shift', () => {
  const Queue_5 = new MinQueue()
  Queue_5.push(0)
  Queue_5.push(1)
  Queue_5.push(2)
  Queue_5.push(-1)
  Queue_5.push(0)
  Queue_5.shift()
  Queue_5.shift()
  it('-->16', () => {
    expect(Queue_5.getMin()).toBe(-1)
  })
  it('-->17', () => {
    expect(Queue_5.queue).toEqual([2, -1, 0])
  })
  it('-->18', () => {
    expect(Queue_5.assistQueue).toEqual([-1, 0])
  })
})

describe('MinQueue-shift', () => {
  const Queue_6 = new MinQueue()
  Queue_6.push(0)
  Queue_6.push(1)
  Queue_6.push(2)
  Queue_6.push(-1)
  Queue_6.push(0)
  Queue_6.shift()
  Queue_6.shift()
  Queue_6.shift()
  it('-->19', () => {
    expect(Queue_6.getMin()).toBe(-1)
  })
  it('-->20', () => {
    expect(Queue_6.queue).toEqual([-1, 0])
  })
  it('-->21', () => {
    expect(Queue_6.assistQueue).toEqual([-1, 0])
  })
})

describe('MinQueue-shift', () => {
  const Queue_7 = new MinQueue()
  Queue_7.push(0)
  Queue_7.push(1)
  Queue_7.push(2)
  Queue_7.push(-1)
  Queue_7.push(0)
  Queue_7.shift()
  Queue_7.shift()
  Queue_7.shift()
  Queue_7.shift()
  it('-->22', () => {
    expect(Queue_7.getMin()).toBe(0)
  })
  it('-->23', () => {
    expect(Queue_7.queue).toEqual([0])
  })
  it('-->24', () => {
    expect(Queue_7.assistQueue).toEqual([0])
  })
})

describe('MinQueue-shift', () => {
  const Queue_8 = new MinQueue()
  Queue_8.push(0)
  Queue_8.push(1)
  Queue_8.push(2)
  Queue_8.push(-1)
  Queue_8.push(0)
  Queue_8.shift()
  Queue_8.shift()
  Queue_8.shift()
  Queue_8.shift()
  Queue_8.shift()
  it('-->25', () => {
    expect(Queue_8.getMin()).toBe(undefined)
  })
  it('-->26', () => {
    expect(Queue_8.queue).toEqual([])
  })
  it('-->27', () => {
    expect(Queue_8.assistQueue).toEqual([])
  })
})
