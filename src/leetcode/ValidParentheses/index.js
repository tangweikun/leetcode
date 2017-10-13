export function isValidParentheses(str) {
  const arr = str.split('')
  const len = arr.length
  let i = 0
  let stack = []
  while (i < len) {
    if (isPair(stack[stack.length - 1], arr[i])) {
      stack.pop()
    } else {
      stack.push(arr[i])
    }
    i++
  }

  return !stack.length
}

function isPair(x, y) {
  if (x === '(' && y === ')') return true
  if (x === '{' && y === '}') return true
  if (x === '[' && y === ']') return true
  return false
}
