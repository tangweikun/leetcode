/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let map = {},
    result = [];
  for (let i of tickets) {
    if (!map[i[0]]) {
      map[i[0]] = [i[1]];
    } else {
      map[i[0]].push(i[1]);
    }
    if (!map[i[1]]) {
      map[i[1]] = [];
    }
  }

  getResult(map, 'JFK', result);
  function getResult(map, spot, result) {
    //   console.log(map)
    if (!map[spot]) return;
    const neighbors = map[spot];
    neighbors.sort();
    while (neighbors.length > 0) {
      getResult(map, neighbors.shift(), result);
    }
    result.push(spot);
  }

  return result.reverse();
};
