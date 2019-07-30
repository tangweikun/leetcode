export const leastInterval = (tasks, n) => {
  const arr = new Array(26).fill(0);
  tasks.forEach(t => arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++);
  const max = Math.max(...arr);
  const count = arr.reduce(
    (total, val) => (val === max ? total + 1 : total),
    0,
  );
  return Math.max(tasks.length, (n + 1) * (max - 1) + count);
};
