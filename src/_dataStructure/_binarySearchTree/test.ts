import BinarySearchTree from '.'

describe('BinarySearchTree-Create', () => {
  const tree1 = new BinarySearchTree()
  it('-->1', () => {
    expect(tree1).toEqual({ root: null })
  })
})

describe('BinarySearchTree-add', () => {
  const tree2 = new BinarySearchTree()
  tree2.add(3)
  it('-->1', () => {
    expect(tree2).toEqual({ root: { data: 3, left: null, right: null } })
  })

  const tree3 = new BinarySearchTree()
  tree3.add(2)
  tree3.add(1)
  tree3.add(3)
  it('-->2', () => {
    expect(tree3).toEqual({
      root: {
        data: 2,
        left: { data: 1, left: null, right: null },
        right: { data: 3, left: null, right: null },
      },
    })
  })

  const tree4 = new BinarySearchTree()
  tree4.add(5)
  tree4.add(3)
  tree4.add(7)
  tree4.add(2)
  tree4.add(4)
  tree4.add(4)
  tree4.add(6)
  tree4.add(8)

  it('-->3', () => {
    expect(tree4).toEqual({
      root: {
        data: 5,
        left: {
          data: 3,
          left: { data: 2, left: null, right: null },
          right: { data: 4, left: null, right: null },
        },
        right: {
          data: 7,
          left: { data: 6, left: null, right: null },
          right: { data: 8, left: null, right: null },
        },
      },
    })
  })

  const tree5 = new BinarySearchTree()
  tree5.add(1)
  tree5.add(2)
  tree5.add(3)
  tree5.add(4)
  tree5.add(5)
  tree5.add(6)
  it('-->4', () => {
    expect(tree5).toEqual({
      root: {
        data: 1,
        left: null,
        right: {
          data: 2,
          left: null,
          right: {
            data: 3,
            left: null,
            right: {
              data: 4,
              left: null,
              right: {
                data: 5,
                left: null,
                right: { data: 6, left: null, right: null },
              },
            },
          },
        },
      },
    })
  })
})
