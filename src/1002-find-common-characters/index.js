/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let res = A[0].split('');
    for (let i = 1; i < A.length; i++) {
        let tmp = A[i].split('');
        res = res.filter(e => {
            let index = tmp.indexOf(e);
            return index !== -1 ? (tmp[index] = 1) : false;
        });
    }
    return res;
};