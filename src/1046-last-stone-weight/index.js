function lastStoneWeight(stones) {
  stones.sort((x, y) => y - x);

  while (stones.length > 1) {
    const remain = stones.shift() - stones.shift();

    if (remain !== 0) {
      let flag = true;
      for (let i = 0; i < stones.length; i++) {
        if (remain >= stones[i]) {
          stones.splice(i, 0, remain);
          flag = false;
          break;
        }
      }
      if (flag) {
        stones.push(remain);
      }
    }
  }

  return ~~stones[0];
}
