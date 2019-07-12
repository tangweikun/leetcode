function letterCasePermutation(str) {
  const res = [];
  dfs('', str);

  return res;

  function dfs(curr, rest) {
    if (rest.length === 0) return res.push(curr);
    dfs(curr + rest.charAt(0), rest.slice(1));
    if (/[A-z]/.test(rest.charAt(0))) {
      dfs(curr + String.fromCharCode(rest.charCodeAt(0) ^ 32), rest.slice(1));
    }
  }
}
