export function numSubarrayBoundedMax(A: number[], L: number, R: number) {
  let res = 0

  for (let i = 0; i < A.length; i++) {
    let flag = false
    for (let j = i; j < A.length; j++) {
      if (A[j] > R) break
      if (A[j] >= L) flag = true
      if (flag) res++
    }
  }

  return res
}
