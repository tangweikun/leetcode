// HELP:

var reachNumber = function(target) {
  target = Math.abs(target);
  let n = 0;

  while (target > 0 || target % 2) {
    n++;
    target -= n;
  }

  return n;
};
