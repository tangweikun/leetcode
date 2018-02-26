import { mergeTrees } from '.'

test('MergeTwoBinaryTrees-1', () => {
  const t1 = null

  const t2 = {
    data: 1,
    left: null,
    right: null,
  }

  expect(mergeTrees(t1, t2)).toEqual({
    data: 1,
    left: null,
    right: null,
  })
})

test('MergeTwoBinaryTrees-2', () => {
  const t3 = {
    data: 1,
    left: { data: 2, left: null, right: null },
    right: null,
  }

  const t4 = {
    data: 1,
    left: { data: 2, left: null, right: null },
    right: { data: 2, left: null, right: null },
  }

  expect(mergeTrees(t3, t4)).toEqual({
    data: 2,
    left: { data: 4, left: null, right: null },
    right: { data: 2, left: null, right: null },
  })
})

test('MergeTwoBinaryTrees-3', () => {
  const t5 = {
    data: 1,
    left: {
      data: 2,
      left: { data: 15, left: null, right: null },
      right: { data: 15, left: null, right: null },
    },
    right: { data: 2, left: null, right: null },
  }

  const t6 = {
    data: 3,
    left: { data: 9, left: null, right: null },
    right: {
      data: 20,
      left: { data: 15, left: null, right: null },
      right: { data: 15, left: null, right: null },
    },
  }

  expect(mergeTrees(t5, t6)).toEqual({
    data: 4,
    left: {
      data: 11,
      left: { data: 15, left: null, right: null },
      right: { data: 15, left: null, right: null },
    },
    right: {
      data: 22,
      left: { data: 15, left: null, right: null },
      right: { data: 15, left: null, right: null },
    },
  })
})

test('MergeTwoBinaryTrees-4', () => {
  const t1 = {
    data: 1,
    left: { data: 3, left: { data: 5, left: null, right: null }, right: null },
    right: { data: 2, left: null, right: null },
  }

  const t2 = {
    data: 2,
    left: { data: 1, left: null, right: { data: 4, left: null, right: null } },
    right: { data: 3, left: null, right: { data: 7, left: null, right: null } },
  }

  expect(mergeTrees(t1, t2)).toEqual({
    data: 3,
    left: {
      data: 4,
      left: { data: 5, left: null, right: null },
      right: { data: 4, left: null, right: null },
    },
    right: { data: 5, left: null, right: { data: 7, left: null, right: null } },
  })
})

test('MergeTwoBinaryTrees-5', () => {
  const t1 = {
    data: 1,
    left: {
      data: 2,
      left: { data: 4, left: null, right: null },
      right: { data: 5, left: null, right: null },
    },
    right: { data: 3, left: null, right: null },
  }

  const t2 = {
    data: 5,
    left: { data: 3, left: { data: 2, left: null, right: null }, right: null },
    right: {
      data: 6,
      left: { data: 1, left: null, right: null },
      right: { data: 4, left: null, right: null },
    },
  }

  expect(mergeTrees(t1, t2)).toEqual({
    data: 6,
    left: {
      data: 5,
      left: { data: 4, left: null, right: null },
      right: { data: 5, left: null, right: null },
    },
    right: {
      data: 9,
      left: { data: 1, left: null, right: null },
      right: { data: 4, left: null, right: null },
    },
  })
})
