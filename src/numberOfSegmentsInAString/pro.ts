export function countSegments(str: string) {
  return str.split(' ').filter(item => item !== '').length
}
