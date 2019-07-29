import { MinStack } from '.'

// TODO: Use async/await to rewrite
describe('MinStack-push', () => {
  const Stack_1 = new MinStack()
  Stack_1.push(1)
  Stack_1.push(2)
  Stack_1.push(1)
  Stack_1.push(-1)
  it('-->1', () => {
    expect(Stack_1.getMin()).toBe(-1)
  })
})

describe('MinStack-push', () => {
  const Stack_2 = new MinStack()
  Stack_2.push(0)
  it('-->2', () => {
    expect(Stack_2.getMin()).toBe(0)
  })
})

describe('MinStack-pop', () => {
  const Stack_3 = new MinStack()
  Stack_3.push(1)
  Stack_3.push(2)
  Stack_3.push(1)
  Stack_3.push(-1)
  Stack_3.push(0)
  Stack_3.pop()
  it('-->1', () => {
    expect(Stack_3.getMin()).toBe(-1)
  })
})

describe('MinStack-pop', () => {
  const Stack_4 = new MinStack()
  Stack_4.push(1)
  Stack_4.push(2)
  Stack_4.push(1)
  Stack_4.push(-1)
  Stack_4.push(0)
  Stack_4.pop()
  Stack_4.pop()
  it('-->2', () => {
    expect(Stack_4.getMin()).toBe(1)
  })
})
