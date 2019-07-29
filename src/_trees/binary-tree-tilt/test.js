import { TREE_2, TREE_3 } from '../_testData';
import { findTilt } from '.';

test('Binary Tree Tilt', () => {
  expect(findTilt(TREE_2)).toBe(1);
});

test('Binary Tree Tilt', () => {
  expect(findTilt(TREE_3)).toBe(12);
});
