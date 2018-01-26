import { checkRecord } from '.'

test('StudentAttendanceRecord-1', () => {
  expect(checkRecord('PPALLP')).toBe(true)
})

test('StudentAttendanceRecord-2', () => {
  expect(checkRecord('PPALLL')).toBe(false)
})

test('StudentAttendanceRecord-3', () => {
  expect(checkRecord('LLL')).toBe(false)
})

test('StudentAttendanceRecord-4', () => {
  expect(checkRecord('LLPPLL')).toBe(true)
})

test('StudentAttendanceRecord-5', () => {
  expect(checkRecord('APAP')).toBe(false)
})

test('StudentAttendanceRecord-6', () => {
  expect(checkRecord('AAP')).toBe(false)
})

test('StudentAttendanceRecord-7', () => {
  expect(checkRecord('ALLAPPL')).toBe(false)
})
