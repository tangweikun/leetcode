export const merge = intervals => {
  let res = [];
  intervals.sort((x, y) => x.start - y.start);
  let current = intervals.slice(0, 1)[0];

  for (let { start, end } of intervals.slice(1)) {
    if (current.end < start) {
      res.push([current.start, current.end]);
      current = { start, end };
    } else {
      current = {
        start: Math.min(current.start, start),
        end: Math.max(current.end, end),
      };
    }
  }

  if (current.start !== undefined) {
    res.push([current.start, current.end]);
  }

  return res;
};
