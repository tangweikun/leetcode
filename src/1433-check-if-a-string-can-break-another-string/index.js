/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkIfCanBreak = function (s1, s2) {
  const arr1 = s1.split('').sort();
  const arr2 = s2.split('').sort();
  let res1 = true;
  let res2 = true;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      res1 = false;
    }
    if (arr1[i] < arr2[i]) {
      res2 = false;
    }

    if ((res1 || res2) === false) {
      return false;
    }
  }

  return res1 || res2;
};
