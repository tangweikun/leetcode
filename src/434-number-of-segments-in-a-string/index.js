export function countSegments(str) {
  let temp = str.trim();
  if (temp === '') return 0;
  let res = 1;

  for (let i = 0; i < temp.length; i++) {
    if (temp.charCodeAt(i) === 32 && temp.charCodeAt(i - 1) !== 32) res++;
  }

  return res;
}
