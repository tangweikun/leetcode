const format = s =>
  s
    .split('')
    .sort()
    .join('');

const powerOf2Collection = new Set();
for (let i = 0; i <= 29; ++i) {
  const s = format(String(2 ** i));
  powerOf2Collection.add(s);
}

export const reorderedPowerOf2 = N => {
  return powerOf2Collection.has(format(String(N)));
};
