import { arrayNesting } from '.'

test('', () => {
  expect(arrayNesting([5, 4, 0, 3, 1, 6, 2])).toBe(4)
})
