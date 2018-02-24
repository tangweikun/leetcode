import { LinkedList } from '..'

const LinkedList_3 = new LinkedList()
LinkedList_3.push(11)
LinkedList_3.push(22)
LinkedList_3.push(33)

describe('LinkedList-Find', () => {
  it('-->1', () => {
    expect(LinkedList_3.find(11).data).toBe(11)
  })
  it('-->2', () => {
    expect(LinkedList_3.find(22).data).toBe(22)
  })
  it('-->3', () => {
    expect(LinkedList_3.find(33).data).toBe(33)
  })
  it('-->4', () => {
    expect(LinkedList_3.find(44)).toBe(null)
  })
})
