/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */
// HELP:
var peopleIndexes = function (favoriteCompanies) {
  let res = [];
  let len = favoriteCompanies.length;

  for (let i = 0; i < len; i++) {
    let cur = favoriteCompanies[i];
    let flag = true;

    // 当前的能不能加入结果，只要它不是任何人的子集
    for (let j = 0; j < len; j++) {
      let hash = new Set(cur);
      let next = favoriteCompanies[j];
      if (i == j || cur.length > next.length) {
        continue;
      }

      for (let k = 0; k < next.length; k++) {
        if (hash.has(next[k])) {
          hash.delete(next[k]);
        }
      }

      // 删完了，你是我的子集，不能加
      if (hash.size === 0) {
        flag = false;
        break;
      }
    }

    if (flag) {
      res.push(i);
    }
  }
  return res;
};
