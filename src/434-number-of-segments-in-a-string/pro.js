export function countSegments(str) {
  return str.split(' ').filter(item => item !== '').length;
}
