export function countSegments(str: string) {
  return (str.match(/[^\s]+/g) || []).length
}
