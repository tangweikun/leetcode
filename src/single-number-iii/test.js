import { singleNumber3 } from '.'

test('singleNumber3', () => {
  expect(singleNumber3([1, 2, 1, 3, 2, 5]).sort((x, y) => x - y)).toEqual([
    3,
    5,
  ])
})

test('singleNumber3', () => {
  expect(
    singleNumber3([1, 4, 4, 4, 5, 4, 3, 5, 1, 7]).sort((x, y) => x - y),
  ).toEqual([3, 7])
})

test('singleNumber3', () => {
  expect(singleNumber3([1, 2]).sort((x, y) => x - y)).toEqual([1, 2])
})
