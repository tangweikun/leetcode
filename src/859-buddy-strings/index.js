/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    let exchangeChar = [];
    const hash = {};
    let count = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== B[i]) {
            count++;
            exchangeChar.push(i);
        }

        hash[A[i]] = ~~hash[A[i]] + 1;
    }

    // 如果A和B相等，只要A中存在相同字母则返回`true`
    if (count === 0) {
        return Object.values(hash).some(x => x > 1);
    }

    // 如果A和B中存在两个不相等的字符，且这两个字符调换位置后A和B相等
    if (count === 2) {
        return A[exchangeChar[0]] === B[exchangeChar[1]] && A[exchangeChar[1]] === B[exchangeChar[0]];
    }

    return false;
};