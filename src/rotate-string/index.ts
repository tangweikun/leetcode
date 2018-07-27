export const rotateString = (A: string, B: string) => {
  if (A === B) return true
  let current = A.split('')

  for (let i = 0; i < A.length; i++) {
    let temp = current[0]
    current.shift()
    current.push(temp)
    if (current.join('') === B) return true
  }

  return false
}
