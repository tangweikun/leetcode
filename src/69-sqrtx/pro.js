export function sqrt(x) {
  let low = 1;
  let high = x;
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    const midSquare = mid * mid;
    if (midSquare === x) return mid;
    else if (midSquare > x) high = mid - 1;
    else low = mid + 1;
  }

  return low - 1;
}
