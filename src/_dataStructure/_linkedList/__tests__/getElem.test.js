import { LinkedList } from '..'

const LinkedList_3 = new LinkedList()
LinkedList_3.push(1)
LinkedList_3.push(2)
LinkedList_3.push(3)

describe('LinkedList-GetElem', () => {
  it('-->1', () => {
    expect(LinkedList_3.getElem(1).data).toBe(1)
  })
  it('-->2', () => {
    expect(LinkedList_3.getElem(2).data).toBe(2)
  })
  it('-->3', () => {
    expect(LinkedList_3.getElem(3).data).toBe(3)
  })
  it('-->4', () => {
    expect(LinkedList_3.getElem(4)).toBe('Node Not Exist')
  })
  it('-->5', () => {
    expect(LinkedList_3.getElem(0)).toBe('Node Not Exist')
  })
})
