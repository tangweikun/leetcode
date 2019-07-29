// HELP:

export const isAdditiveNumber = function(num) {
  for (let i = 1; i <= num.length / 2; i++) {
    for (let j = 1; j <= num.length / 2; j++) {
      if (j > 1 && num[i] === '0') continue;
      let a = +num.substr(0, i);
      let b = +num.substr(i, j);
      if (generate(a, b, num.length) === num) return true;
    }
  }
  return false;
};

const generate = function(a, b, limit) {
  let str = '' + a + b;
  if (str.length >= limit) return '';
  while (str.length < limit) {
    const c = a + b;
    str += c;
    a = b;
    b = c;
  }
  return str;
};
