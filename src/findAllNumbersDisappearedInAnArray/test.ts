import { findDisappearedNumbers } from '.'

test('FindAllNumbersDisappearedInAnArray-1', () => {
  expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6])
})

test('FindAllNumbersDisappearedInAnArray-1', () => {
  expect(findDisappearedNumbers([2, 3, 3])).toEqual([1])
})

test('FindAllNumbersDisappearedInAnArray-1', () => {
  expect(findDisappearedNumbers([1, 1, 1])).toEqual([2, 3])
})

test('FindAllNumbersDisappearedInAnArray-1', () => {
  expect(findDisappearedNumbers([2, 3, 3, 4, 4])).toEqual([1, 5])
})

test('FindAllNumbersDisappearedInAnArray-1', () => {
  expect(findDisappearedNumbers([1, 2, 3, 4])).toEqual([])
})
