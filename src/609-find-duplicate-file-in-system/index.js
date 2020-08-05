/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {
  const hash = {};
  for (let str of paths) {
    const arr = str.split(' ');
    const root = arr[0];
    for (let char of arr.slice(1)) {
      const foo = char.split('(');
      const fileName = foo[0];
      const content = foo[1].slice(0, -1);
      const url = root + '/' + fileName;
      if (hash[content]) {
        hash[content].push(url);
      } else {
        hash[content] = [url];
      }
    }
  }

  return Object.values(hash).filter((x) => x.length > 1);
};
