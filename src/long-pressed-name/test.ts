import { isLongPressedName } from '.'

test('isLongPressedName', () => {
  expect(isLongPressedName('alex', 'aaleex')).toBe(true)
})

test('isLongPressedName', () => {
  expect(isLongPressedName('saeed', 'ssaaedd')).toBe(false)
})

test('isLongPressedName', () => {
  expect(isLongPressedName('leelee', 'lleeelee')).toBe(true)
})

test('isLongPressedName', () => {
  expect(isLongPressedName('laiden', 'laiden')).toBe(true)
})
