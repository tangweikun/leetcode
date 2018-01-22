import { reverseWords } from '.'

test('reverseWords-1', () => {
  expect(reverseWords('hello world')).toBe('olleh dlrow')
})

test('reverseWords-2', () => {
  expect(reverseWords("Let's take LeetCode contest")).toBe(
    "s'teL ekat edoCteeL tsetnoc",
  )
})
