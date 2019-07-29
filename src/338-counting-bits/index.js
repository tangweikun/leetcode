export function countBits(num) {
  let res = [];
  let i = 0;
  while (i <= num) {
    res.push(getBits(i));
    i++;
  }

  return res;
}

const getBits = num => {
  let res = 0;
  while (num > 0) {
    res += num & 1;
    num >>= 1;
  }

  return res;
};
