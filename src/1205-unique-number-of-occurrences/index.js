/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let hash = {};
    for (let n of arr) {
        hash[n] = ~~hash[n] + 1;
    }

    const values = Object.values(hash);
    return values.length === new Set(values).size;
};