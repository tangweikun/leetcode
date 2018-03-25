import { binaryTreePaths } from '.'
import { TREE_1 } from '../_testData'

test('binaryTreePaths', () => {
  expect(binaryTreePaths(TREE_1)).toEqual(['1->2->5', '1->3'])
})
