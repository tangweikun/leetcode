export function isLongPressedName(name, typed) {
  let nameIndex = 0;

  for (let i = 0; i < typed.length; i++) {
    if (typed[i] === name[nameIndex]) {
      nameIndex++;
    } else if (typed[i] !== name[nameIndex - 1]) {
      return false;
    }
  }

  return nameIndex === name.length;
}
