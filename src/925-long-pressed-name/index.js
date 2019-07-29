export function isLongPressedName(name, typed) {
  let typedIndex = 0;
  const nameLen = name.length;

  for (let i = 0; i < nameLen; i++) {
    if (name[i] === typed[typedIndex]) {
      typedIndex++;
    } else {
      while (name[i - 1] === typed[typedIndex]) typedIndex++;
      if (name[i] !== typed[typedIndex]) return false;
      typedIndex++;
    }
  }

  return [].every.call(
    typed.slice(typedIndex),
    x => x === name[name.length - 1],
  );
}
