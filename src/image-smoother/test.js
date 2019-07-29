import { imageSmoother } from '.';

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 0], [1, 1, 1], [1, 1, 1]])).toEqual([
    [1, 0, 0],
    [1, 0, 0],
    [1, 1, 1],
  ]);
});

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 1], [1, 1, 1], [1, 1, 1]])).toEqual([
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
  ]);
});

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 1, 0], [1, 1, 0, 1], [0, 1, 1, 1]])).toEqual([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
});

test('imageSmoother', () => {
  expect(imageSmoother([[1, 1, 1, 0], [1, 1, 1, 1], [0, 1, 1, 1]])).toEqual([
    [1, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 1, 1],
  ]);
});

test('imageSmoother', () => {
  expect(
    imageSmoother([
      [2, 3, 4],
      [5, 6, 7],
      [8, 9, 10],
      [11, 12, 13],
      [14, 15, 16],
    ]),
  ).toEqual([[4, 4, 5], [5, 6, 6], [8, 9, 9], [11, 12, 12], [13, 13, 14]]);
});

test('imageSmoother', () => {
  expect(
    imageSmoother([
      [2, 3, 4],
      [0, 6, 7],
      [8, 6, 10],
      [11, 10, 13],
      [14, 0, 16],
    ]),
  ).toEqual([[2, 3, 5], [4, 5, 6], [6, 7, 8], [8, 9, 9], [8, 10, 9]]);
});
