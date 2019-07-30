// TODO: Refactor Me

export const frequencySort = str => {
  const charactorFrequency = countCharactorFrequency(str);
  const sortedFrequency = getSortedFrequency(charactorFrequency);

  let res = [];
  for (let i = 0; i < sortedFrequency.length; i++) {
    res.push(
      ...Array(charactorFrequency[sortedFrequency[i]]).fill(
        String.fromCharCode(sortedFrequency[i]),
      ),
    );
  }

  return res.join('');
};

const countCharactorFrequency = str => {
  const charactorFrequency = Array(128).fill(0);
  for (let i = 0; i < str.length; i++) {
    charactorFrequency[str.charCodeAt(i)]++;
  }

  return charactorFrequency;
};

const getSortedFrequency = charactorFrequency => {
  const sortedFrequency = [0];
  for (let i = 1; i < charactorFrequency.length; i++) {
    for (let j = 0; j < sortedFrequency.length; j++) {
      if (charactorFrequency[i] >= charactorFrequency[sortedFrequency[j]]) {
        sortedFrequency.splice(j, 0, i);
        break;
      }
    }
  }

  return sortedFrequency;
};
