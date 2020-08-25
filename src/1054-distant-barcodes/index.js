/**
 * @param {number[]} barcodes
 * @return {number[]}
 */

// HELP:
var rearrangeBarcodes = function (barcodes = []) {
  if (barcodes.length <= 2) {
    return barcodes;
  }
  // 数组排序
  barcodes.sort();

  const len = barcodes.length;
  let mid = Number.parseInt(len / 2);
  let listL = undefined;
  let listR = undefined;
  let l = 0;
  let r = mid;
  // 如果长度为奇数，则 listL 长度加一
  if (len % 2 !== 0) {
    r = mid + 1;
  }
  // 窗口滑动
  while (r < barcodes.length && barcodes[r - 1] === barcodes[r]) {
    l += 1;
    r += 1;
  }
  listL = barcodes.slice(l, r);
  listR = [...barcodes.slice(0, l), ...barcodes.slice(r)];

  // 新建一个 array，将 listL 和 listR 数据插入其中
  let res = Array(len);
  for (let i = 0; i < listR.length; i++) {
    res[2 * i] = listL[i];
    res[2 * i + 1] = listR[mid - 1 - i];
  }

  if (len % 2 !== 0) {
    res[len - 1] = listL[mid];
  }
  return res;
};
