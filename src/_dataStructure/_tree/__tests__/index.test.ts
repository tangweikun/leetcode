import Tree from '..'
import { TreeNode } from '../treeNode'

test('tree-1', () => {
  const tree1 = new Tree('CEO')
  expect(tree1._root).toEqual({ val: 'CEO', parent: null, children: [] })
})

test('tree-2', () => {
  const tree = new Tree('one')
  tree._root.children.push(new TreeNode('two'))
  tree._root.children[0].parent = tree

  tree._root.children.push(new TreeNode('three'))
  tree._root.children[1].parent = tree

  tree._root.children.push(new TreeNode('four'))
  tree._root.children[2].parent = tree

  tree._root.children[0].children.push(new TreeNode('five'))
  tree._root.children[0].children[0].parent = tree._root.children[0]

  tree._root.children[0].children.push(new TreeNode('six'))
  tree._root.children[0].children[1].parent = tree._root.children[0]

  tree._root.children[1].children.push(new TreeNode('seven'))
  tree._root.children[1].children[0].parent = tree._root.children[1]

  expect(tree._root.val).toBe('one')
  expect(tree._root.children[0].val).toBe('two')
  expect(tree._root.children[1].val).toBe('three')
  expect(tree._root.children[2].val).toBe('four')
  expect(tree._root.children[0].children[0].val).toBe('five')
  expect(tree._root.children[0].children[1].val).toBe('six')
  expect(tree._root.children[1].children[0].val).toBe('seven')
  expect(tree._root.parent).toBe(null)

  const df: any[] = []
  tree.traverseDF((treeNode: any) => df.push(treeNode.val))
  expect(df).toEqual(['five', 'six', 'two', 'seven', 'three', 'four', 'one'])

  const bf: any[] = []
  tree.traverseBF((treeNode: any) => bf.push(treeNode.val))
  expect(bf).toEqual(['one', 'two', 'three', 'four', 'five', 'six', 'seven'])

  expect(tree.contains('four')).toBe(true)
  expect(tree.contains('zero')).toBe(false)
})
