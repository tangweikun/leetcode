import { TREE_3, TREE_7, TREE_10, TREE_1 } from '../_testData';
import { sumOfLeftLeaves } from '.';

test('SumOfLeftLeaves-1', () => {
  expect(sumOfLeftLeaves(TREE_3)).toBe(9);
});

test('SumOfLeftLeaves-2', () => {
  expect(sumOfLeftLeaves(TREE_7)).toBe(4);
});

test('SumOfLeftLeaves-3', () => {
  expect(sumOfLeftLeaves(TREE_10)).toBe(1);
});

test('SumOfLeftLeaves-4', () => {
  expect(sumOfLeftLeaves(TREE_1)).toBe(0);
});
