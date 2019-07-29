export const replaceWords = (dict, sentence) => {
  const arr = sentence.split(' ');
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let min = Infinity;
    for (let word of dict) {
      if (arr[i].indexOf(word) === 0 && word.length < min) {
        temp = word;
        min = word.length;
      }
    }
    arr[i] = temp;
  }

  return arr.join(' ');
};
