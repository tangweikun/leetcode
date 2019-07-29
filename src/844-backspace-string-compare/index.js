export const backspaceCompare = (S, T) => {
  return helper(S) === helper(T);
};

function helper(str) {
  const res = [];
  for (let s of str) {
    if (s === '#') {
      res.pop();
    } else {
      res.push(s);
    }
  }
  return res.join();
}
