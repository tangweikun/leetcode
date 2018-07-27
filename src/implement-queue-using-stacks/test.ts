import { MyQueue } from '.'

test('ImplementQueueUsingStacks', () => {
  const q1 = new MyQueue()
  expect(q1.data).toEqual([])
  expect(q1.empty()).toBe(true)
  expect(q1.peek()).toBe(undefined)
})

test('ImplementQueueUsingStacks', () => {
  const q1 = new MyQueue()
  q1.push(3)
  expect(q1.data).toEqual([3])
  expect(q1.empty()).toBe(false)
  expect(q1.peek()).toBe(3)
})
