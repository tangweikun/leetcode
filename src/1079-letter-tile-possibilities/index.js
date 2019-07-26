/**
 * @param {string} tiles
 * @return {number}
 */

var numTilePossibilities = function(tiles) {
  let res = new Set();
  dfs(tiles.split(''), '');

  function dfs(arr, str) {
    for (let i = 0; i < arr.length; i++) {
      res.add(str + arr[i]);
      if (arr.length > 1) {
        const copyArr = [...arr];
        copyArr.splice(i, 1);
        dfs(copyArr, str + arr[i]);
      }
    }
  }

  return res.size;
};
