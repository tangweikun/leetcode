export const canConstruct = (ransomNote, magazine) => {
  let m = magazine.split('');

  for (let char of ransomNote) {
    const pos = m.indexOf(char);
    if (pos === -1) return false;
    m.splice(pos, 1);
  }

  return true;
};
