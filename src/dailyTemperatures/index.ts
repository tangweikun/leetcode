export function dailyTemperatures(temperatures: number[]) {
  const stack: number[] = []
  const res: number[] = []

  for (let i = temperatures.length - 1; i >= 0; i--) {
    let foo = 0
    let j = stack.length - 1

    while (j >= 0 && foo === 0) {
      if (stack[j] > temperatures[i]) foo = temperatures.length - 1 - i - j
      j--
    }

    res.unshift(foo)
    stack.push(temperatures[i])
  }

  return res
}
