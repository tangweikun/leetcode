import { MyCalendarTwo } from '.'

test('', () => {
  const cal = new MyCalendarTwo()
  expect(cal.book(15, 20)).toBe(true)
  expect(cal.book(15, 20)).toBe(true)
  expect(cal.book(20, 30)).toBe(true)
})

test('', () => {
  const cal = new MyCalendarTwo()
  expect(cal.book(10, 20)).toBe(true)
  expect(cal.book(50, 60)).toBe(true)
  expect(cal.book(10, 40)).toBe(true)
  expect(cal.book(5, 15)).toBe(false)
  expect(cal.book(5, 10)).toBe(true)
  expect(cal.book(25, 55)).toBe(true)
})
