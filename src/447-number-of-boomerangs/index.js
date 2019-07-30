// HELP:

export function numberOfBoomerangs(points) {
  let len = points.length;
  let ans = 0;

  for (let i = 0; i < len; i++) {
    let p = new Map();
    for (let j = 0; j < len; j++) {
      if (i !== j) {
        const distance = getDis(i, j);
        const count = ~~p.get(distance);
        ans += count;
        p.set(distance, count + 1);
      }
    }
  }

  return ans * 2;

  function getDis(i, j) {
    return (
      Math.pow(points[i][0] - points[j][0], 2) +
      Math.pow(points[i][1] - points[j][1], 2)
    );
  }
}
