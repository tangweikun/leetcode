import {
  TREE_8,
  TREE_1,
  TREE_2,
  TREE_3,
  TREE_4,
  TREE_5,
  TREE_7,
} from '../_testData'
import { mergeTrees } from '.'

test('MergeTwoBinaryTrees-1', () => {
  expect(mergeTrees(null, TREE_8)).toEqual({
    val: 1,
    left: null,
    right: null,
  })
})

test('MergeTwoBinaryTrees-2', () => {
  expect(mergeTrees(TREE_1, TREE_2)).toEqual({
    left: { left: null, right: { left: null, right: null, val: 5 }, val: 4 },
    right: { left: null, right: null, val: 6 },
    val: 2,
  })
})

test('MergeTwoBinaryTrees-3', () => {
  expect(mergeTrees(TREE_3, TREE_4)).toEqual({
    left: {
      left: { left: null, right: null, val: 7 },
      right: { left: null, right: null, val: 1 },
      val: 4,
    },
    right: {
      left: { left: { left: null, right: null, val: 4 }, right: null, val: 8 },
      right: { left: null, right: null, val: 9 },
      val: 7,
    },
    val: 9,
  })
})

test('MergeTwoBinaryTrees-4', () => {
  expect(mergeTrees(TREE_5, TREE_3)).toEqual({
    left: {
      left: { left: null, right: null, val: 7 },
      right: { left: null, right: null, val: 1 },
      val: 4,
    },
    right: {
      left: { left: { left: null, right: null, val: 4 }, right: null, val: 8 },
      right: {
        left: null,
        right: {
          left: null,
          right: { left: null, right: null, val: 0 },
          val: 0,
        },
        val: 9,
      },
      val: 7,
    },
    val: 9,
  })
})

test('MergeTwoBinaryTrees-5', () => {
  expect(mergeTrees(TREE_3, TREE_7)).toEqual({
    left: {
      left: { left: null, right: null, val: 11 },
      right: { left: null, right: null, val: 1 },
      val: 6,
    },
    right: {
      left: {
        left: { left: null, right: null, val: 4 },
        right: { left: null, right: null, val: 7 },
        val: 13,
      },
      right: { left: null, right: null, val: 15 },
      val: 10,
    },
    val: 10,
  })
})
