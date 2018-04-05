import { imageSmoother } from '.'

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])
})

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 0], [1, 1, 1], [1, 1, 1]])).toEqual([
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ])
})

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toEqual([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ])
})

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 1]])).toEqual([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ])
})

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 1, 0], [1, 1, 1, 1], [0, 1, 1, 1]])).toEqual([
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 1],
  ])
})
