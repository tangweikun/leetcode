export const MyCalendar = function() {
  this.books = [];
};

MyCalendar.prototype.book = function(start, end) {
  for (let i = 0; i < this.books.length; i++) {
    if (end <= this.books[i].start) {
      this.books.splice(i, 0, { start, end });
      return true;
    }

    if (end < this.books[i].end || start < this.books[i].end) {
      return false;
    }
  }

  this.books.push({ start, end });
  return true;
};
