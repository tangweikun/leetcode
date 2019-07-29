export const findContentChildren = (g, s) => {
  g.sort((x, y) => x - y);
  s.sort((x, y) => x - y);

  let res = 0;
  for (let el of g) {
    while (el > s[0]) s.shift();
    if (s.length === 0) return res;
    s.shift();
    res++;
  }
  return res;
};
