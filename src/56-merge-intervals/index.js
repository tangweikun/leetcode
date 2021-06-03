const merge = (intervals) => {
  intervals.sort((x, y) => x[0] - y[0]);
  const res = [];
  let temp = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const cur = intervals[i];

    if (cur[0] > temp[1]) {
      res.push(temp);
      temp = cur;
    } else {
      temp[1] = Math.max(cur[1], temp[1]);
    }
  }

  res.push(temp);

  return res;
};
