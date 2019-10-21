/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
  let res = new Set();
  dfs(tiles, (temp = ''));
  return res.size;

  function dfs(str, temp) {
    if (temp !== '') {
      res.add(temp);
    }

    for (let i = 0; i < str.length; i++) {
      dfs(str.slice(0, i) + str.slice(i + 1), temp + str[i]);
    }
  }
};
