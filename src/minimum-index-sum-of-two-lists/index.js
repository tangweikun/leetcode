export function findRestaurant(arr1, arr2) {
  let res = [];
  let min = Infinity;
  const commonRestaurant = getCommonRestaurant(arr1, arr2);

  commonRestaurant.forEach((value, key) => {
    if (value === min) {
      res.push(key);
    }
    if (value < min) {
      res = [key];
      min = value;
    }
  });

  return res;
}

const getCommonRestaurant = (arr1, arr2) => {
  const hash = new Map();
  const temp = new Map();
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (hash.has(arr1[i]) || hash.has(arr2[i])) {
      temp.set(arr1[i], i + hash.get(arr1[i]));
      temp.set(arr2[i], i + hash.get(arr2[i]));
    } else {
      if (arr1[i] === arr2[i]) {
        temp.set(arr1[i], i * 2);
      } else {
        hash.set(arr1[i], i);
        hash.set(arr2[i], i);
      }
    }
  }

  return temp;
};
