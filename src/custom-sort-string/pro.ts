export const customSortString = (S: string, T: string) => {
  const tList = T.split('')
  tList.sort((a, b) => S.indexOf(a) - S.indexOf(b))
  return tList.join('')
}
