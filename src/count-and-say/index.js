export function countAndSay(n) {
  let result = '1';
  for (let i = 2; i <= n; i++) {
    result = say(result);
  }

  return result;
}

export const say = str => {
  let count = 1;
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += count + str[i];
      count = 1;
    }
  }

  return result;
};
