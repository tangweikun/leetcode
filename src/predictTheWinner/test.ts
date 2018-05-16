import { predictTheWinner } from '.'

test('Predict the Winner', () => {
  expect(predictTheWinner([1, 5, 2])).toBe(false)
})

test('Predict the Winner', () => {
  expect(predictTheWinner([1, 5, 233, 7])).toBe(true)
})
