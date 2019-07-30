export const subdomainVisits = cpdomains => {
  let hashTable = {};

  for (let domain of cpdomains) {
    const [count, fullDomain] = domain.split(' ');

    const arrFullDomain = fullDomain.split('.');
    for (let i = 0; i < arrFullDomain.length; i++) {
      const key = arrFullDomain.slice(i).join('.');
      hashTable[key] = ~~hashTable[key] + Number(count);
    }
  }

  const arr = Object.keys(hashTable).reduce(
    (acc, key) => acc.concat(`${hashTable[key]} ${key}`),
    [],
  );

  return arr;
};
