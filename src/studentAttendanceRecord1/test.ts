import { checkRecord } from '.'

test('StudentAttendanceRecord-1', () => {
  expect(checkRecord('PPALLP')).toBe(true)
})

test('StudentAttendanceRecord-1', () => {
  expect(checkRecord('PPALLL')).toBe(false)
})

test('StudentAttendanceRecord-1', () => {
  expect(checkRecord('LLL')).toBe(false)
})

test('StudentAttendanceRecord-1', () => {
  expect(checkRecord('LLPPLL')).toBe(true)
})

test('StudentAttendanceRecord-1', () => {
  expect(checkRecord('APAP')).toBe(false)
})

test('StudentAttendanceRecord-1', () => {
  expect(checkRecord('AAP')).toBe(false)
})

test('StudentAttendanceRecord-1', () => {
  expect(checkRecord('ALLAPPL')).toBe(false)
})
