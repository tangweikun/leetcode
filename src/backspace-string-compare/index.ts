export const backspaceCompare = (S: string, T: string) => {
  return helper(S) === helper(T)
}

function helper(str: string) {
  const res = []
  for (let s of str) {
    if (s === '#') {
      res.pop()
    } else {
      res.push(s)
    }
  }
  return res.join()
}
