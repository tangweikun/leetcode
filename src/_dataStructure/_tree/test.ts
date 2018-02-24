import BinarySearchTree from '.'

describe('BinarySearchTree-Create', () => {
  const tree1 = new BinarySearchTree()
  it('-->1', () => {
    expect(tree1).toEqual({ root: null })
  })
})
