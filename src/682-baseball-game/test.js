import { calPoints } from '.'

test('BaseballGame-1', () => {
  expect(calPoints(['5', '2', 'C', 'D', '+'])).toBe(30)
})

test('BaseballGame-2', () => {
  expect(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+'])).toBe(27)
})

test('BaseballGame-3', () => {
  expect(calPoints([])).toBe(0)
})
