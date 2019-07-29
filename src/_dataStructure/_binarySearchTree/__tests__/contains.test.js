import BinarySearchTree from '..'

describe('BinarySearchTree-Contains', () => {
  const tree1 = new BinarySearchTree()
  tree1.add(2)
  tree1.add(1)
  tree1.add(3)
  it('-->1', () => {
    expect(tree1.contains(1)).toBe(true)
  })
  it('-->2', () => {
    expect(tree1.contains(2)).toBe(true)
  })
  it('-->3', () => {
    expect(tree1.contains(3)).toBe(true)
  })
  it('-->4', () => {
    expect(tree1.contains(4)).toBe(false)
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
  it('-->1', () => {
    expect(tree2.contains(5)).toBe(true)
  })
  it('-->2', () => {
    expect(tree2.contains(3)).toBe(true)
  })
  it('-->3', () => {
    expect(tree2.contains(7)).toBe(true)
  })
  it('-->4', () => {
    expect(tree2.contains(2)).toBe(true)
  })
  it('-->5', () => {
    expect(tree2.contains(4)).toBe(true)
  })
  it('-->6', () => {
    expect(tree2.contains(6)).toBe(true)
  })
  it('-->7', () => {
    expect(tree2.contains(8)).toBe(true)
  })
  it('-->8', () => {
    expect(tree2.contains(9)).toBe(false)
  })
  it('-->9', () => {
    expect(tree2.contains(1)).toBe(false)
  })
})
