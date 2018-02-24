import { LinkedList } from '..'

const LinkedList_1 = new LinkedList()
LinkedList_1.removeHead()

const LinkedList_2 = new LinkedList()
LinkedList_2.push(1)
LinkedList_2.push(2)
LinkedList_2.push(3)
LinkedList_2.removeHead()

describe('LinkedList-RemoveHead', () => {
  it('-->1', () => {
    expect(LinkedList_1.head).toBe(null)
  })

  it('-->2', () => {
    expect(LinkedList_2.getElem(1).data).toBe(2)
  })
  it('-->3', () => {
    expect(LinkedList_2.getElem(2).data).toBe(3)
  })
})
