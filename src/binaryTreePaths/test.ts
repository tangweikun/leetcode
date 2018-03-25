import { binaryTreePaths } from '.'

test('binaryTreePaths', () => {
  const tree = {
    val: 1,
    left: { val: 2, left: null, right: { val: 5, left: null, right: null } },
    right: { val: 3, left: null, right: null },
  }
  expect(binaryTreePaths(tree)).toEqual(['1->2->5', '1->3'])
})
