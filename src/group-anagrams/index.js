export const groupAnagrams = strs => {
  let res = {};
  for (let str of strs) {
    const key = sortedStr(str);

    if (res[key]) {
      res[key].push(str);
    } else {
      res[key] = [str];
    }
  }

  return Object.values(res);
};

function sortedStr(str) {
  return str
    .split('')
    .sort()
    .join('');
}
