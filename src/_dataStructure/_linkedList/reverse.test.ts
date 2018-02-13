import { LinkedList } from '.'

const LinkedList_5 = new LinkedList()
LinkedList_5.push(1)
LinkedList_5.push(2)
LinkedList_5.push(3)
LinkedList_5.push(4)
LinkedList_5.reverse()

describe('LinkedList-Reverse', () => {
  it('-->1', () => {
    expect(LinkedList_5.getElem(1)).toBe(4)
  })
  it('-->2', () => {
    expect(LinkedList_5.getElem(2)).toBe(3)
  })
})
