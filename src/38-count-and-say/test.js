import { countAndSay, say } from '.'

test('countAndSay-1', () => {
  expect(countAndSay(1)).toBe('1')
})

test('countAndSay-2', () => {
  expect(countAndSay(2)).toBe('11')
})

test('countAndSay-3', () => {
  expect(countAndSay(3)).toBe('21')
})

test('countAndSay-4', () => {
  expect(countAndSay(4)).toBe('1211')
})

test('countAndSay-5', () => {
  expect(countAndSay(5)).toBe('111221')
})

test('countAndSay-6', () => {
  expect(countAndSay(6)).toBe('312211')
})

test('countAndSay-7', () => {
  expect(countAndSay(7)).toBe('13112221')
})

test('say-1', () => {
  expect(say('1')).toBe('11')
})

test('say-2', () => {
  expect(say('11')).toBe('21')
})

test('say-3', () => {
  expect(say('21')).toBe('1211')
})

test('say-4', () => {
  expect(say('1211')).toBe('111221')
})

test('say-5', () => {
  expect(say('312211')).toBe('13112221')
})

test('say-6', () => {
  expect(say('13112221')).toBe('1113213211')
})