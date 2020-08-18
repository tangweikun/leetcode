/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function (S, K) {
  let size = 0;

  for (let i = 0; i < S.length; i++) {
    // 计算size
    if (/[0-9]/.test(S[i])) {
      size *= S[i];
    } else {
      size++;
    }

    if (size >= K) {
      // 倒序还原
      for (let j = i; j >= 0; j--) {
        K = K % size;
        if (K === 0 && !/[0-9]/.test(S[j])) {
          return S[j];
        }
        if (/[0-9]/.test(S[j])) {
          size = size / S[j];
        } else {
          size--;
        }
      }
    }
  }
};
