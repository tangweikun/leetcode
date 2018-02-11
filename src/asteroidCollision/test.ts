import { asteroidCollision } from '.'

test('AsteroidCollision-1', () => {
  expect(asteroidCollision([5, 10, -5])).toEqual([5, 10])
})

test('AsteroidCollision-2', () => {
  expect(asteroidCollision([8, -8])).toEqual([])
})

test('AsteroidCollision-3', () => {
  expect(asteroidCollision([10, 2, -5])).toEqual([10])
})

test('AsteroidCollision-4', () => {
  expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2])
})

test('AsteroidCollision-5', () => {
  expect(asteroidCollision([-2, -1, 1, 2, -3, 4])).toEqual([-2, -1, -3, 4])
})

test('AsteroidCollision-6', () => {
  expect(asteroidCollision([1, -2, -2, -2])).toEqual([-2, -2, -2])
})

test('AsteroidCollision-7', () => {
  expect(asteroidCollision([1, 2, 4, 3, -5])).toEqual([-5])
})
