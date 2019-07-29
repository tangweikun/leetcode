import { partitionLabels } from '.'

test('', () => {
  expect(partitionLabels('ababcbacadefegdehijhklij')).toEqual([9, 7, 8])
})

test('', () => {
  expect(partitionLabels('gauand')).toEqual([1, 3, 1, 1])
})

test('', () => {
  expect(partitionLabels('ajffa')).toEqual([5])
})
