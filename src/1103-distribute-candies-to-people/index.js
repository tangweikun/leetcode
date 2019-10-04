/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    const res = new Array(num_people).fill(0);
    let i = 1;
    while (candies > 0) {
        res[(i - 1) % num_people] = res[(i - 1) % num_people] + Math.min(i, candies);
        candies -= i;
        i++;
    }
    return res;
};