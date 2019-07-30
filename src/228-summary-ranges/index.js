export const summaryRanges = nums => {
  let current = nums.slice(0, 1);
  let res = [];

  for (let n of nums.slice(1)) {
    if (current[current.length - 1] + 1 === n) {
      current.push(n);
    } else {
      res.push(
        current.length === 1
          ? `${current[0]}`
          : `${current[0]}->${current[current.length - 1]}`,
      );
      current = [n];
    }
  }

  if (current.length === 1) {
    res.push(`${current[0]}`);
  } else if (current.length > 1) {
    res.push(`${current[0]}->${current[current.length - 1]}`);
  }

  return res;
};
