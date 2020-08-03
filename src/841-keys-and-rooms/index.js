/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let opens = new Set();
  openRooms(0);
  return opens.size >= rooms.length;

  function openRooms(key) {
    if (!opens.has(key)) {
      // 没开门才可以进去拿钥匙
      opens.add(key); // 把该房间加入opens
      for (let otherKey of rooms[key]) {
        openRooms(otherKey);
      }
    }
  }
};
