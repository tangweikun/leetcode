/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
  const arr = String(n).split("");
  let sum = 0;
  let product = 1;

  for (let n of arr) {
    sum += +n;
    product *= n;
  }

  return product - sum;
};
