/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = [];
    const arr = S.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === stack[stack.length - 1]) {
            arr.splice(i - 1, 2);
            i -= 2;
            stack.pop();
        } else {
            stack.push(arr[i]);
        }
    }
    return arr.join('');
};