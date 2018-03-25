import { TREE_4, TREE_5 } from '../_testData'
import { findDuplicateSubtrees } from '.'

test('FindDuplicateSubtrees-1', () => {
  expect(findDuplicateSubtrees(TREE_4)).toEqual([
    { left: null, right: null, val: 4 },
    { left: { left: null, right: null, val: 4 }, right: null, val: 2 },
  ])
})

test('FindDuplicateSubtrees-2', () => {
  expect(findDuplicateSubtrees(TREE_5)).toEqual([
    { left: null, right: null, val: 0 },
  ])
})
