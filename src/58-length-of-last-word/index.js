export function lengthOfLastWord(str) {
  const strWithoutBoundarySpace = str.trim();
  let position = strWithoutBoundarySpace.length - 1;
  let result = 0;

  while (position >= 0) {
    if (strWithoutBoundarySpace[position] === ' ') position = 0;
    else result++;
    position--;
  }

  return result;
}
