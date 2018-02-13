import { LinkedList } from '.'

const LinkedList_1 = new LinkedList()

const LinkedList_2 = new LinkedList()
LinkedList_2.push(2)

const LinkedList_3 = new LinkedList()
LinkedList_3.push(1)
LinkedList_3.push(2)
LinkedList_3.push(3)

const LinkedList_4 = new LinkedList()
LinkedList_4.push(1)
LinkedList_4.push(3)
LinkedList_4.push(4)
// LinkedList_4.insert(2, 2)
// LinkedList_4.delete(3)

const LinkedList_5 = new LinkedList()
LinkedList_5.push(1)
LinkedList_5.push(2)
LinkedList_5.push(3)
LinkedList_5.push(4)
// LinkedList_5.reverse()

describe('LinkedList-Init', () => {
  it('-->1', () => {
    expect(LinkedList_1).toEqual({ head: null })
  })
})

describe('LinkedList-Push', () => {
  it('-->1', () => {
    expect(LinkedList_2.head.value).toBe(2)
  })
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

describe('LinkedList-GetElem', () => {
  it('-->1', () => {
    expect(LinkedList_3.getElem(1)).toBe(1)
  })
  it('-->2', () => {
    expect(LinkedList_3.getElem(2)).toBe(2)
  })
  it('-->3', () => {
    expect(LinkedList_3.getElem(3)).toBe(3)
  })
  it('-->4', () => {
    expect(LinkedList_3.getElem(4)).toBe('Node Not Exist')
  })
  it('-->5', () => {
    expect(LinkedList_3.getElem(0)).toBe('Node Not Exist')
  })
})

// describe('LinkedList-Insert', () => {
//   it('-->1', () => {
//     expect(LinkedList_4.getElem(1)).toBe(1)
//   })
//   it('-->2', () => {
//     expect(LinkedList_4.getElem(2)).toBe(2)
//   })
// })

// describe('LinkedList-delete', () => {
//   it('-->1', () => {
//     expect(LinkedList_4.getElem(3)).toBe(4)
//   })
// })

// describe('LinkedList-Reverse', () => {
//   it('-->1', () => {
//     expect(LinkedList_5.getElem(1)).toBe(4)
//   })
//   it('-->2', () => {
//     expect(LinkedList_5.getElem(2)).toBe(3)
//   })
// })
