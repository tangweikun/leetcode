// HELP:

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
const canShipWithinDays = (weights, D, capacity) => {
  let boats = 1,
    currentOnBoat = 0;
  for (const weight of weights) {
    currentOnBoat += weight;
    if (currentOnBoat > capacity) {
      ++boats;
      currentOnBoat = weight;
      if (boats > D) break;
    }
  }
  return boats <= D;
};

const shipWithinDays = (weights, D) => {
  const totalWeights = weights.reduce((prev, el) => prev + el, 0);
  let low = Math.max(Math.max(...weights), Math.ceil(totalWeights / D));
  let high = totalWeights;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);
    if (canShipWithinDays(weights, D, mid)) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
};
