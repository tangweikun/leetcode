import { MinQueue } from '.'

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

// describe('MinQueue-push', () => {
//   const Queue_1 = new MinQueue()
//   Queue_1.push(1)
//   Queue_1.push(2)
//   Queue_1.push(1)
//   Queue_1.push(-1)
//   it('-->1', () => {
//     expect(Queue_1.getMin()).toBe(-1)
//   })
//   it('-->2', () => {
//     expect(Queue_1.queue).toEqual([1, 2, 1, -1])
//   })
//   it('-->3', () => {
//     expect(Queue_1.assistQueue).toEqual([-1])
//   })
// })
