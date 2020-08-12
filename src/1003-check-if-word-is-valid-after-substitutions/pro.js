/**
 * @param {string} S
 * @return {boolean}
 */
var isValid = function (S) {
  while (/abc/.test(S)) {
    S = S.replace(/abc/g, '');
  }

  return S === '';
};
