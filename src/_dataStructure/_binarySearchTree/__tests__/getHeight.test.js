import BinarySearchTree from '..'
import { getHeight } from '../getHeight'

describe('BinarySearchTree-getHeight', () => {
  const tree1 = new BinarySearchTree()
  tree1.add(2)
  tree1.add(1)
  tree1.add(3)
  it('-->1', () => {
    expect(getHeight(tree1.root)).toBe(2)
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
    expect(getHeight(tree2.root)).toBe(3)
  })

  const tree3 = new BinarySearchTree()
  it('-->3', () => {
    expect(getHeight(tree3.root)).toBe(0)
  })
})
