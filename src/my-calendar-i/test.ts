import { MyCalendar } from '.'

test('', () => {
  const cal = new MyCalendar()
  expect(cal.book(15, 20)).toBe(true)
  expect(cal.book(15, 20)).toBe(false)
  expect(cal.book(20, 30)).toBe(true)
})

test('', () => {
  const cal = new MyCalendar()
  expect(cal.book(10, 20)).toBe(true)
  expect(cal.book(15, 25)).toBe(false)
  expect(cal.book(20, 30)).toBe(true)
})

test('', () => {
  const cal = new MyCalendar()
  expect(cal.book(47, 50)).toBe(true)
  expect(cal.book(33, 41)).toBe(true)
  expect(cal.book(39, 45)).toBe(false)
  expect(cal.book(33, 42)).toBe(false)
  expect(cal.book(25, 32)).toBe(true)
  expect(cal.book(26, 35)).toBe(false)
  expect(cal.book(19, 25)).toBe(true)
  expect(cal.book(3, 8)).toBe(true)
  expect(cal.book(8, 13)).toBe(true)
  expect(cal.book(18, 27)).toBe(false)
})

test('', () => {
  const cal = new MyCalendar()
  expect(cal.book(48, 50)).toBe(true)
  expect(cal.book(0, 6)).toBe(true)
  expect(cal.book(6, 13)).toBe(true)
  expect(cal.book(8, 13)).toBe(false)
  expect(cal.book(15, 23)).toBe(true)
  expect(cal.book(49, 50)).toBe(false)
  expect(cal.book(45, 50)).toBe(false)
  expect(cal.book(29, 34)).toBe(true)
  expect(cal.book(3, 12)).toBe(false)
  expect(cal.book(38, 44)).toBe(true)
})
