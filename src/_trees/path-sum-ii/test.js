import { TREE_1, TREE_7, TREE_9 } from '../_testData';
import { pathSum2 } from '.';

test('pathSum2', () => {
  expect(pathSum2(TREE_1, 22)).toEqual([]);
});

test('pathSum2', () => {
  expect(pathSum2(TREE_7, 7)).toEqual([[1, 2, 4]]);
});

test('pathSum2', () => {
  expect(pathSum2(TREE_9, 4)).toEqual([[2, 2], [2, 2]]);
});
