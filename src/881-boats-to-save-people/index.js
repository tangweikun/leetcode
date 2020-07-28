/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  let res = 0;
  people.sort((x, y) => y - x);
  let left = 0;
  let right = people.length - 1;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      right--;
    }

    left++;
    res++;
  }

  return res;
};
