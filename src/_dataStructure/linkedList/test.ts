import { LinkedList } from '.'

describe('LinkedList-Init', () => {
  const LinkedList_1 = new LinkedList()
  it('-->1', () => {
    expect(LinkedList_1).toEqual({ head: null })
  })
})

describe('LinkedList-Push', () => {
  const LinkedList_2 = new LinkedList()
  LinkedList_2.push(2)

  it('-->1', () => {
    expect(LinkedList_2.head.value).toBe(2)
  })

  const LinkedList_3 = new LinkedList()
  LinkedList_3.push(1)
  LinkedList_3.push(2)
  LinkedList_3.push(3)

  it('-->2', () => {
    expect(LinkedList_3.head.value).toBe(1)
  })
  it('-->3', () => {
    expect(LinkedList_3.head.next.value).toBe(2)
  })
  it('-->4', () => {
    expect(LinkedList_3.head.next.next.value).toBe(3)
  })
})
