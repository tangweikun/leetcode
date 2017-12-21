import { getIndex } from '.'

test('getIndex', () => {
  expect(getIndex('goodjob', 'good', 0)).toBe(0)
})

test('getIndex', () => {
  expect(getIndex('goodjob', 'job', 0)).toBe(4)
})

test('getIndex', () => {
  expect(getIndex('goodjob', 'jot', 0)).toBe(-1)
})

test('getIndex', () => {
  expect(getIndex('goodjob', 'o', 2)).toBe(2)
})
