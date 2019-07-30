export function checkRecord(str) {
  let sumA = 0;
  let sumL = 0;

  for (let i = 0; i < str.length; i++) {
    sumL = ~~(str.charAt(i) === 'L') * (sumL + 1);
    sumA += ~~(str.charAt(i) === 'A');

    if (sumA > 1 || sumL > 2) return false;
  }

  return true;
}
