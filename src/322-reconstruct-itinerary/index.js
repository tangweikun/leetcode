/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// HELP:
var findItinerary = function (tickets) {
  const graph = getGraph(tickets);
  const ans = [];
  dfs(graph, 'JFK', ans);
  // 深度优先遍历是先进先出，所以reverse反转一下
  return ans.reverse();
};

//从JFS出发，深度优先遍历
function dfs(graph, cur, ans) {
  if (!graph.has(cur)) return;
  const neighbors = graph.get(cur);
  // 题目要求先遍历字典序小的元素
  while (neighbors.length) dfs(graph, neighbors.shift(), ans);
  // 因为深度优先遍历是先进先出，所以每次遍历出发点添加到最后，意为最先出
  ans.push(cur);
}

// 先存储所有机场之间的关系，哪怕tickets中没有给某个机场提供目的地记录，也要把它的目的地置为空数组
function getGraph(tickets) {
  const map = new Map();
  // 收集每一个出发点的所有目的地
  for (let i = 0; i < tickets.length; i++) {
    const from = tickets[i][0];
    const to = tickets[i][1];
    if (!map.has(from)) map.set(from, []);
    if (!map.has(to)) map.set(to, []);
    map.get(from).push(to);
  }
  for (let [key, value] of map) {
    // 字典顺序排序目的地数组
    value.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  }

  return map;
}
