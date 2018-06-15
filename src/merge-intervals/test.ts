import { merge } from '.'

test('', () => {
  expect(
    merge([
      { start: 1, end: 3 },
      { start: 2, end: 6 },
      { start: 8, end: 10 },
      { start: 15, end: 18 },
    ]),
  ).toEqual([[1, 6], [8, 10], [15, 18]])
})

test('', () => {
  expect(merge([{ start: 1, end: 4 }, { start: 4, end: 5 }])).toEqual([[1, 5]])
})

test('', () => {
  expect(
    merge([
      { start: 1, end: 3 },
      { start: 2, end: 6 },
      { start: 8, end: 10 },
      { start: 15, end: 18 },
    ]),
  ).toEqual([[1, 6], [8, 10], [15, 18]])
})

test('', () => {
  expect(
    merge([
      { start: 2, end: 3 },
      { start: 4, end: 5 },
      { start: 6, end: 7 },
      { start: 8, end: 9 },
      { start: 1, end: 10 },
    ]),
  ).toEqual([[1, 10]])
})
