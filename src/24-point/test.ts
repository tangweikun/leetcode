import { isConform } from '.'

// describe('isConform-addAndSubtract', () => {
//   it('-->1', () => {
//     expect(isConform([1, '+', 12, '+', 10, '+', 1])).toBe(true)
//   })
//   it('-->2', () => {
//     expect(isConform([3, '+', 12, '+', 10, '-', 1])).toBe(true)
//   })
//   it('-->3', () => {
//     expect(isConform([4, '-', 6, '+', 13, '+', 13])).toBe(true)
//   })
//   it('-->4', () => {
//     expect(isConform([13, '-', 1, '-', 1, '+', 13])).toBe(true)
//   })
// })

// describe('isConform-multiplyDivide', () => {
//   it('-->1', () => {
//     expect(isConform([24, '/', 2, '+', 1, '+', 11])).toBe(true)
//   })
//   it('-->2', () => {
//     expect(isConform([2, '*', 4, '*', 3, '/', 1])).toBe(true)
//   })
//   it('-->3', () => {
//     expect(isConform([3, '*', 7, '+', 1, '*', 3])).toBe(true)
//   })
//   it('-->4', () => {
//     expect(isConform([12, '*', 2, '-', 4, '+', 4])).toBe(true)
//   })
//   it('-->5', () => {
//     expect(isConform([12, '-', 8, '+', 4, '*', 5])).toBe(true)
//   })
// })

describe('isConform-mix', () => {
  // it('-->1', () => {
  //   expect(isConform(['(', 10, '+', 2, ')', '*', 2, '/', 1])).toBe(true)
  // })
  // it('-->2', () => {
  //   expect(isConform(['(', 5, '-', 1, '/', 5,')', '*', 5])).toBe(true)
  // })
  // it('-->3', () => {
  //   expect(isConform(['(', 12, '-', '(', 8, '-', 2, ')', ')', '*', 4])).toBe(true)
  // })
  it('-->4', () => {
    expect(isConform(['(', 1, '+', 2, ')', '*', '(', 8, '/', 2, ')', '+', '(', 3, '-', 2, ')', '*', '(', 2, '+', 3, '+', 3, '+', 4, ')'])).toBe(true)
  })
})
