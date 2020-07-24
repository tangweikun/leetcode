/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let hash = {};
  const res = [];

  for (let i = 0; i < groupSizes.length; i++) {
    if (hash[groupSizes[i]]) {
      if (hash[groupSizes[i]].length === groupSizes[i]) {
        res.push(hash[groupSizes[i]]);
        delete hash[groupSizes[i]];
        hash[groupSizes[i]] = [i];
        continue;
      }

      hash[groupSizes[i]].push(i);
      continue;
    }

    hash[groupSizes[i]] = [i];
  }

  return [...res, ...Object.values(hash)];
};
