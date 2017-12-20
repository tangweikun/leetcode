import { MinQueue } from '.'

describe('MinQueue1', () => {
  const MinQueue1 = new MinQueue()
  MinQueue1.push(1)
  MinQueue1.push(2)
  MinQueue1.push(1)
  MinQueue1.push(-1)
  it('1-1', () => {
    expect(MinQueue1.getMin()).toBe(1)
  })
  it('1-2', () => {
    expect(MinQueue1.queue).toEqual([1, 2, 1, -1])
  })
  it('1-3', () => {
    expect(MinQueue1.assistQueue).toEqual([1, -1])
  })
})
