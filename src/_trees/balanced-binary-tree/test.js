import { TREE_1, TREE_3, TREE_10, TREE_13 } from '../_testData';
import { isBalanced } from '.';

test('isBalanced', () => {
  expect(isBalanced(TREE_1)).toBe(true);
});

test('isBalanced', () => {
  expect(isBalanced(TREE_3)).toBe(true);
});

test('isBalanced', () => {
  expect(isBalanced(TREE_10)).toBe(false);
});

test('isBalanced', () => {
  expect(isBalanced(TREE_13)).toBe(false);
});
