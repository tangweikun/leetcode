/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
  let res = 0;

  for (let n of arr1) {
    let flag = true;
    for (let i = 0; i < arr2.length; i++) {
      if (Math.abs(n - arr2[i]) <= d) {
        flag = false;
        break;
      }
    }

    res += Number(flag);
  }

  return res;
};
