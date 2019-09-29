/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  const odd = A.filter(n => n % 2 === 1);
  const even = A.filter(n => n % 2 === 0);

  return A.map((_, i) => (i % 2 === 0 ? even[i / 2] : odd[(i - 1) / 2]));
};
