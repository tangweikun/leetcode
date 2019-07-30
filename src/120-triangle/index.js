export const minimumTotal = triangle => {
  let res = triangle[0];

  for (let arr of triangle.slice(1)) {
    const temp = [];
    for (let i = 0; i < arr.length; i++) {
      if (res[i] === undefined || res[i - 1] === undefined) {
        temp.push(arr[i] + ~~res[i] + ~~res[i - 1]);
      } else {
        temp.push(arr[i] + Math.min(res[i], res[i - 1]));
      }
    }
    res = temp;
  }

  return Math.min(...res);
};
