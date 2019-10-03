/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let hash = {};
    for (let char of text) {
        hash[char] = ~~hash[char] + 1;
    }
    return Math.floor(Math.min(~~hash['b'], ~~hash['a'], ~~hash['l'] / 2, ~~hash['o'] / 2, ~~hash['n']));
};