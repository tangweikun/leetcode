// FIXME:
export const unionList = (La, Lb) => {
  const result = La
  const La_len = La.length
  const Lb_len = Lb.length

  Lb.forEach(elem => {
    if (result.find(item => item === elem) === undefined) {
      result.push(elem)
    }
  })

  return result
}
