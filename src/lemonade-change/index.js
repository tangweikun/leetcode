export const lemonadeChange = function(bills) {
  let five = 0;
  let ten = 0;

  for (let money of bills) {
    if (money === 5) five++;
    else if (money === 10) {
      if (five === 0) return false;
      ten++;
      five--;
    } else {
      if (five === 0 || ten * 10 + five * 5 < 15) return false;
      if (ten === 0) {
        five -= 3;
      } else {
        ten--;
        five--;
      }
    }
  }

  return true;
};
