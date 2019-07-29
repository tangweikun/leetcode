export function isOneBitCharacter(bits) {
  let i = 0;

  while (i < bits.length - 1) {
    i += bits[i] + 1;
  }

  return i === bits.length - 1;
}
