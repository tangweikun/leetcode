import { Tree } from '.'

describe('Tree-Create', () => {
  const tree1 = new Tree('CEO')
  it('-->1', () => {
    expect(tree1).toEqual({
      _root: { children: [], data: 'CEO', parent: null },
    })
  })
})
