import BinarySearchTree from '.'

describe('BinarySearchTree-Create', () => {
  const tree1 = new BinarySearchTree()
  it('-->1', () => {
    expect(tree1).toEqual({ root: null })
  })
})

describe('BinarySearchTree-Push', () => {
  const tree2 = new BinarySearchTree()
  tree2.push(3)
  it('-->1', () => {
    expect(tree2).toEqual({ root: { data: 3, left: null, right: null } })
  })

  const tree3 = new BinarySearchTree()
  tree3.push(1)
  tree3.push(2)
  tree3.push(3)
  it('-->2', () => {
    expect(tree3).toEqual({
      root: {
        data: 1,
        left: null,
        right: {
          data: 2,
          left: null,
          right: { data: 3, left: null, right: null },
        },
      },
    })
  })
})
