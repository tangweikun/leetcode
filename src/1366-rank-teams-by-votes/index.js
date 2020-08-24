/**
 * @param {string[]} votes
 * @return {string}
 */
var rankTeams = function (votes) {
  // 添加权重，计算每个队员的权重分，然后进行排序即可。

  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rank = new Array(26).fill(0);
  let len = votes[0].length; // 对len个队员来进行排名
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < votes.length; j++) {
      // 第j个人投票给 队员votes[j][i] 名次为i 转化为权重分，累加起来
      rank[chars.indexOf(votes[j][i])] += Math.pow(26, len - 1 - i);
    }
  }

  let res = [];
  for (let i = 0; i < 26; i++) {
    if (rank[i] > 0) res.push(chars[i]);
  }
  res.sort((a, b) => {
    return rank[chars.indexOf(b)] - rank[chars.indexOf(a)];
  });

  return res.join('');
};
