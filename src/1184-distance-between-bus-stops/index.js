/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  //算出总数
  let total = distance.reduce((sum, cur) => sum + cur, 0);
  let forward = 0;
  //调整参数，为了先算正向
  if (start > destination) {
    [start, destination] = [destination, start];
  }
  //先算正向
  for (let i = start; i < destination; i++) {
    forward += distance[i];
  }
  //再算逆向
  let backword = total - forward;

  return Math.min(forward, backword);
};
