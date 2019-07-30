export const leastInterval = (tasks, n) => {
  const taskList = Array(26).fill(0);
  let res = 0;

  tasks.forEach(task => taskList[task.charCodeAt(0) - 'A'.charCodeAt(0)]++);

  while (true) {
    taskList.sort((x, y) => y - x);
    if (taskList[0] <= 1) {
      for (let i = 0; i < 26; i++) {
        if (taskList[i] > 0) {
          res++;
        }
      }
      break;
    }

    for (let i = 0; i <= n; i++) {
      res++;
      taskList[i]--;
    }
  }

  return res;
};
