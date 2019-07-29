export const findPoisonedDuration = (timeSeries, duration) => {
  let res = duration * timeSeries.length;

  for (let i = 1; i < timeSeries.length; i++) {
    const previousEndTime = timeSeries[i - 1] + duration;
    if (previousEndTime > timeSeries[i]) {
      res += timeSeries[i] - previousEndTime;
    }
  }

  return res;
};
