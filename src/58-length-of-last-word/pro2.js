// Simple but slower
export function lengthOfLastWordPro2(str) {
  const foo = str.trim().split(' ');
  return foo[foo.length - 1].length;
}
