import { calculate } from '../utils/calculate'

export function mathematicalOperation(arr: any[]) {
  const arr2 = []
  const helpArr2 = []

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      arr2.push(arr[i])
    } else {
      if (arr[i] === '(') {
        helpArr2.push(arr[i])
      } else if (arr[i] === ')') {
        while (helpArr2[helpArr2.length - 1] !== '(') {
          arr2.push(helpArr2[helpArr2.length - 1])
          helpArr2.pop()
        }
        helpArr2.pop()
      } else if (priority[arr[i]] <= priority[helpArr2[helpArr2.length - 1]]) {
        while (helpArr2[helpArr2.length - 1] !== '(' && helpArr2.length) {
          arr2.push(helpArr2[helpArr2.length - 1])
          helpArr2.pop()
        }
        helpArr2.push(arr[i])
      } else {
        helpArr2.push(arr[i])
      }
    }
  }

  const ans = [...arr2, ...helpArr2.reverse()]
  const stack = []
  for (let k = 0; k < ans.length; k++) {
    if (isNaN(ans[k])) {
      const res = calculate(
        stack[stack.length - 2],
        stack[stack.length - 1],
        ans[k],
      )
      stack.pop()
      stack.pop()
      stack.push(res)
    } else {
      stack.push(ans[k])
    }
  }

  return stack[0] === 24
}

const priority = {
  '+': 0,
  '-': 0,
  '*': 1,
  '/': 1,
}
