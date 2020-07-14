// HELP:

var deckRevealedIncreasing = function (deck) {
  if (!deck.length) return [];
  deck.sort((a, b) => a - b);
  const res = [deck.pop()];

  while (deck.length) {
    res.unshift(res.pop());
    res.unshift(deck.pop());
  }

  return res;
};
