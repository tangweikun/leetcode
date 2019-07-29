import { LinkedList } from '..'

const LinkedList_1 = new LinkedList()
LinkedList_1.addToHead(1)

const LinkedList_2 = new LinkedList()
LinkedList_2.push(1)
LinkedList_2.push(2)
LinkedList_2.push(3)
LinkedList_2.addToHead(0)

describe('LinkedList-AddToHead', () => {
  it('-->1', () => {
    expect(LinkedList_1.getElem(1).data).toBe(1)
  })

  it('-->2', () => {
    expect(LinkedList_2.getElem(1).data).toBe(0)
  })
  it('-->3', () => {
    expect(LinkedList_2.getElem(2).data).toBe(1)
  })
  it('-->4', () => {
    expect(LinkedList_2.getElem(3).data).toBe(2)
  })
})
