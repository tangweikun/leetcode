import { numJewelsInStones } from '.'

test('JewelsAndStones-1', () => {
  expect(numJewelsInStones('A', 'AAA')).toBe(3)
})

test('JewelsAndStones-2', () => {
  expect(numJewelsInStones('A', 'BAB')).toBe(1)
})

test('JewelsAndStones-3', () => {
  expect(numJewelsInStones('A', 'aAbA')).toBe(2)
})

test('JewelsAndStones-4', () => {
  expect(numJewelsInStones('ABc', 'AaccCb')).toBe(3)
})

test('JewelsAndStones-5', () => {
  expect(numJewelsInStones('', 'AAA')).toBe(0)
})

test('JewelsAndStones-6', () => {
  expect(numJewelsInStones('AB', 'CCCB')).toBe(1)
})
