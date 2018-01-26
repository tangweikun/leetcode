import { findRestaurant } from '.'

test('MinimumIndexSumOfTwoLists-1', () => {
  expect(
    findRestaurant(
      ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      [
        'Piatti',
        'The Grill at Torrey Pines',
        'Hungry Hunter Steakhouse',
        'Shogun',
      ],
    ),
  ).toEqual(['Shogun'])
})

test('MinimumIndexSumOfTwoLists-1', () => {
  expect(
    findRestaurant(
      ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
      ['KFC', 'Shogun', 'Burger King'],
    ),
  ).toEqual(['Shogun'])
})

test('MinimumIndexSumOfTwoLists-1', () => {
  expect(findRestaurant(['A', 'B', 'C', 'D'], ['E', 'D', 'B'])).toEqual(['B'])
})

test('MinimumIndexSumOfTwoLists-1', () => {
  expect(findRestaurant(['A', 'B', 'C', 'D'], ['B', 'A', 'C']).sort()).toEqual([
    'A',
    'B',
  ])
})
