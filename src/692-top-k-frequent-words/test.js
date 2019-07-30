import { topKFrequent } from '.'

test('', () => {
  expect(
    topKFrequent(
      [
        'plpaboutit',
        'jnoqzdute',
        'sfvkdqf',
        'mjc',
        'nkpllqzjzp',
        'foqqenbey',
        'ssnanizsav',
        'nkpllqzjzp',
        'sfvkdqf',
        'isnjmy',
        'pnqsz',
        'hhqpvvt',
        'fvvdtpnzx',
        'jkqonvenhx',
        'cyxwlef',
        'hhqpvvt',
        'fvvdtpnzx',
        'plpaboutit',
        'sfvkdqf',
        'mjc',
        'fvvdtpnzx',
        'bwumsj',
        'foqqenbey',
        'isnjmy',
        'nkpllqzjzp',
        'hhqpvvt',
        'foqqenbey',
        'fvvdtpnzx',
        'bwumsj',
        'hhqpvvt',
        'fvvdtpnzx',
        'jkqonvenhx',
        'jnoqzdute',
        'foqqenbey',
        'jnoqzdute',
        'foqqenbey',
        'hhqpvvt',
        'ssnanizsav',
        'mjc',
        'foqqenbey',
        'bwumsj',
        'ssnanizsav',
        'fvvdtpnzx',
        'nkpllqzjzp',
        'jkqonvenhx',
        'hhqpvvt',
        'mjc',
        'isnjmy',
        'bwumsj',
        'pnqsz',
        'hhqpvvt',
        'nkpllqzjzp',
        'jnoqzdute',
        'pnqsz',
        'nkpllqzjzp',
        'jnoqzdute',
        'foqqenbey',
        'nkpllqzjzp',
        'hhqpvvt',
        'fvvdtpnzx',
        'plpaboutit',
        'jnoqzdute',
        'sfvkdqf',
        'fvvdtpnzx',
        'jkqonvenhx',
        'jnoqzdute',
        'nkpllqzjzp',
        'jnoqzdute',
        'fvvdtpnzx',
        'jkqonvenhx',
        'hhqpvvt',
        'isnjmy',
        'jkqonvenhx',
        'ssnanizsav',
        'jnoqzdute',
        'jkqonvenhx',
        'fvvdtpnzx',
        'hhqpvvt',
        'bwumsj',
        'nkpllqzjzp',
        'bwumsj',
        'jkqonvenhx',
        'jnoqzdute',
        'pnqsz',
        'foqqenbey',
        'sfvkdqf',
        'sfvkdqf',
      ],
      1,
    ),
  ).toEqual(['fvvdtpnzx'])
})

test('', () => {
  expect(
    topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 3),
  ).toEqual(['i', 'love', 'coding'])
})

test('', () => {
  expect(
    topKFrequent(['i', 'love', 'leetcode', 'i', 'love', 'coding'], 2),
  ).toEqual(['i', 'love'])
})

test('', () => {
  expect(
    topKFrequent(
      ['the', 'day', 'is', 'sunny', 'the', 'the', 'the', 'sunny', 'is', 'is'],
      4,
    ),
  ).toEqual(['the', 'is', 'sunny', 'day'])
})
