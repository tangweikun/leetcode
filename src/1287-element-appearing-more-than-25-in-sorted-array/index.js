/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  const k = Math.floor(arr.length / 4);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + k]) {
      return arr[i];
    }
  }
};
