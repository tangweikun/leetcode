/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    var s = [];
    for (var x of S) {
        if (x === s[s.length - 1]) s.pop();
        else s.push(x);
    }
    return s.join('');
};