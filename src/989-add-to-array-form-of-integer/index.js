/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    const res = [];
    let carry = 0;
    while (A.length > 0 || K > 0) {
        let sum = ~~A.pop() + (K % 10) + carry;
        res.unshift(sum % 10);
        carry = Math.floor(sum / 10);
        K = Math.floor(K / 10);
    }

    if (carry > 0) {
        res.unshift(carry);
    }

    return res;
};