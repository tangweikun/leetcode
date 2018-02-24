import BinarySearchTree from '.'

describe('BinarySearchTree-getMin', () => {
  const tree1 = new BinarySearchTree()
  tree1.add(2)
  tree1.add(1)
  tree1.add(3)
  it('-->1', () => {
    expect(tree1.getMin()).toBe(1)
  })

  const tree2 = new BinarySearchTree()
  tree2.add(5)
  tree2.add(3)
  tree2.add(7)
  tree2.add(2)
  tree2.add(4)
  tree2.add(4)
  tree2.add(6)
  tree2.add(8)
  it('-->2', () => {
    expect(tree2.getMin()).toBe(2)
  })
})
