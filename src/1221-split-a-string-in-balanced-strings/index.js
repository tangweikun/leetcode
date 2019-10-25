/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let left = 0;
    let right = 0;
    let res = 0;
    for (let char of s) {
        if (char === 'L') {
            left++;
        } else {
            right++;
        }

        if (left === right) {
            res++;
        }
    }

    return res;
};