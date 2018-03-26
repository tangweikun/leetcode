// Stack

export const decodeString = (s: string) => {
  const stack: any = []

  for (let char of s) {
    if (char === ']') {
      let cur = ''
      while (stack[stack.length - 1] !== '[') cur = stack.pop() + cur
      stack.pop() // delete '['
      stack.push(cur.repeat(stack.pop()))
    } else {
      if (isFinite(+char) && isFinite(stack[stack.length - 1])) {
        stack[stack.length - 1] = stack[stack.length - 1] * 10 + +char
      } else {
        stack.push(char)
      }
    }
  }

  return stack.join('')
}
