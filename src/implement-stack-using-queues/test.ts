import { MyStack } from '.'

test('ImplementStackUsingQueues', () => {
  const q1 = new MyStack()
  expect(q1.data).toEqual([])
  expect(q1.empty()).toBe(true)
  expect(q1.top()).toBe(undefined)
})

test('ImplementStackUsingQueues', () => {
  const q1 = new MyStack()
  q1.push(3)
  expect(q1.data).toEqual([3])
  expect(q1.empty()).toBe(false)
  expect(q1.top()).toBe(3)
})
