import { uniqueMorseRepresentations } from '.'

test('uniqueMorseRepresentations', () => {
  expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2)
})

test('uniqueMorseRepresentations', () => {
  expect(uniqueMorseRepresentations(['a', 'b', 'c'])).toBe(3)
})
