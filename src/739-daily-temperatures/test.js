import { dailyTemperatures } from '.'

test('DailyTemperatures-1', () => {
  expect(dailyTemperatures([])).toEqual([])
})

test('DailyTemperatures-1', () => {
  expect(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])).toEqual([
    1,
    1,
    4,
    2,
    1,
    1,
    0,
    0,
  ])
})

test('DailyTemperatures-1', () => {
  expect(dailyTemperatures([5, 4, 3])).toEqual([0, 0, 0])
})

test('DailyTemperatures-1', () => {
  expect(dailyTemperatures([3, 4, 5])).toEqual([1, 1, 0])
})

test('DailyTemperatures-1', () => {
  expect(dailyTemperatures([1, 2, 3, 2, 1])).toEqual([1, 1, 0, 0, 0])
})
