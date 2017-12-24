export function isValidParentheses(str: string): boolean {
  const arr = str.split('')
  const len = arr.length
  if (isOdd(len)) return false

  let i = 0
  let stack = []
  while (i < len) {
    if (isPair(stack[stack.length - 1], arr[i])) stack.pop()
    else {
      if (isClosingParentheses(arr[i])) return false
      else stack.push(arr[i])
    }
    i++
  }

  return !stack.length
}

function isPair(x: string, y: string): boolean {
  if (x === '(' && y === ')') return true
  if (x === '{' && y === '}') return true
  if (x === '[' && y === ']') return true
  return false
}

function isOdd(num: number): boolean {
  return !(num % 2 === 0)
}

function isClosingParentheses(x: string): boolean {
  if (x === ')' || x === '}' || x === ']') return true
  return false
}
