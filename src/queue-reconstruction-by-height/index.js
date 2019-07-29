// HELP:

export const reconstructQueue = people => {
  people.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));

  const ans = [];
  people.forEach(item => {
    ans.splice(item[1], 0, item);
  });

  return ans;
};
