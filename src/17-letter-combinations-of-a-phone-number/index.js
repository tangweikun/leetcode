/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === "") return [];
  const hash = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"].map((x) => x.split(""));
  const res = [];
  dfs("", 0);
  return res;

  function dfs(temp, index) {
    if (index === digits.length) {
      return res.push(temp);
    }

    for (let char of hash[digits[index]]) {
      dfs(temp + char, index + 1);
    }
  }
};

console.log(letterCombinations(""));
