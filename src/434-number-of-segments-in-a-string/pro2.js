export function countSegments(str) {
  return (str.match(/[^\s]+/g) || []).length;
}
