/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let flag = 0;
    for (let i = 1; i < A.length; i++) {
        if ((A[i] - A[i - 1]) * flag < 0) {
            return false;
        }

        flag = flag ? flag : Math.sign(A[i] - A[i - 1]);
    }

    return true;
};