export const maxDistToClosest = seats => {
  let lastPerson = -1;
  let max = 1;
  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      max = Math.max(
        max,
        lastPerson === -1 ? i : Math.floor((i - lastPerson) / 2),
      );

      lastPerson = i;
    }
  }

  return Math.max(max, seats.length - 1 - lastPerson);
};
