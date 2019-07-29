export const getRow = n => {
  let i = 0;
  let res = [];

  while (i < n + 1) {
    const row = Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) row[j] = res[j - 1] + res[j];
    res = row;
    i++;
  }

  return res;
};
