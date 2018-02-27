import BinarySearchTree from '..'

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
    expect(tree2).toEqual({ root: { val: 3, left: null, right: null } })
  })

  const tree3 = new BinarySearchTree()
  tree3.add(2)
  tree3.add(1)
  tree3.add(3)
  it('-->2', () => {
    expect(tree3).toEqual({
      root: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null },
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
        val: 5,
        left: {
          val: 3,
          left: { val: 2, left: null, right: null },
          right: { val: 4, left: null, right: null },
        },
        right: {
          val: 7,
          left: { val: 6, left: null, right: null },
          right: { val: 8, left: null, right: null },
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
        val: 1,
        left: null,
        right: {
          val: 2,
          left: null,
          right: {
            val: 3,
            left: null,
            right: {
              val: 4,
              left: null,
              right: {
                val: 5,
                left: null,
                right: { val: 6, left: null, right: null },
              },
            },
          },
        },
      },
    })
  })
})
