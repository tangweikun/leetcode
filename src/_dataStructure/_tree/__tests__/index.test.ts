import Tree from '..'

test('tree-1', () => {
  const tree1 = new Tree('CEO')
  expect(tree1._root).toEqual({ val: 'CEO', parent: null, children: [] })
})
