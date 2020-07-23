/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let res = numBottles;
  let emptyBottles = numBottles;

  while (emptyBottles >= numExchange) {
    res += Math.floor(emptyBottles / numExchange);
    emptyBottles =
      (emptyBottles % numExchange) + Math.floor(emptyBottles / numExchange);
  }

  return res;
};
