// HELP:

export const MyCalendarTwo = function() {
  this.hasBook = [];
  this.blackTime = [];
};

MyCalendarTwo.prototype.book = function(start, end) {
  for (let ele of this.blackTime) {
    let bStart = ele[0];
    let bEnd = ele[1];
    if (end <= bStart || start >= bEnd) {
      continue;
    }
    return false;
  }
  for (let ele of this.hasBook) {
    let hStart = ele[0];
    let hEnd = ele[1];
    if (end <= hStart || start >= hEnd) {
      continue;
    }

    let composeStart = Math.max(start, hStart);
    let composeEnd = Math.min(end, hEnd);
    this.blackTime.push([composeStart, composeEnd]);
  }
  this.hasBook.push([start, end]);
  return true;
};
