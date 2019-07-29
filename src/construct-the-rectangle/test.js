import { constructRectangle } from '.';

test('', () => {
  expect(constructRectangle(4)).toEqual([2, 2]);
});

test('', () => {
  expect(constructRectangle(8)).toEqual([4, 2]);
});
