// HELP:

export const findCircleNum = M => {
  const foo = Array(M.length).fill(0);
  let circleNums = 0;

  for (let i = 0; i < M.length; i++) {
    if (!foo[i]) {
      dfs(i);
      circleNums++;
    }
  }
  return circleNums;

  function dfs(i) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] && !foo[j]) {
        foo[j] = 1;
        dfs(j);
      }
    }
  }
};
