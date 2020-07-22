/**
 * @param {string[]} transactions
 * @return {string[]}
 */

var invalidTransactions = function (transactions) {
  let res = [];
  let map = {};
  // 以名字区分
  for (let t of transactions) {
    let [name, time, money, city] = t.split(',');
    let obj = { name, time, money, city, t };
    map[name] ? map[name].push(obj) : (map[name] = [obj]); // 数组元素可重复
  }

  for (let name in map) {
    let arr = map[name];
    let indexSet = new Set();
    for (let index = 0; index < arr.length; index++) {
      let t = arr[index];
      // 问题在于中间隔了一个或更多怎么判断
      // way 1,分别遍历对比
      // way 2,边界法
      // let timeLine = arr[0].time
      let indexTOther = arr.findIndex(
        (i, index) =>
          index != i && Math.abs(i.time - t.time) <= 60 && t.city != i.city
      );
      if (indexTOther > -1) {
        if (!indexSet.has(index)) {
          indexSet.add(index);
          res.push(t.t);
        }
        if (!indexSet.has(indexTOther)) {
          indexSet.add(indexTOther);
          res.push(arr[indexTOther].t);
        }
      } else if (t.money > 1000 && !indexSet.has(index)) {
        indexSet.add(index);
        res.push(t.t);
      }
    }
  }

  return res;
};
