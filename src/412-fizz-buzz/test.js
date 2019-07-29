import { fizzBuzz } from '.'

test('-->1', () => {
  expect(fizzBuzz(1)).toEqual(['1'])
})
test('-->2', () => {
  expect(fizzBuzz(2)).toEqual(['1', '2'])
})
test('-->3', () => {
  expect(fizzBuzz(3)).toEqual(['1', '2', 'Fizz'])
})
test('-->4', () => {
  expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz'])
})
test('-->5', () => {
  expect(fizzBuzz(15)).toEqual([
    '1',
    '2',
    'Fizz',
    '4',
    'Buzz',
    'Fizz',
    '7',
    '8',
    'Fizz',
    'Buzz',
    '11',
    'Fizz',
    '13',
    '14',
    'FizzBuzz',
  ])
})
