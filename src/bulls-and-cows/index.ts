export const getHint = (secret: string, guess: string) => {
  let bull = 0
  let cow = 0
  const foo = Array(10).fill(0)
  const bar = Array(10).fill(0)

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) {
      bull++
      continue
    }
    foo[+secret[i]]++
    bar[+guess[i]]++
  }

  for (let i = 0; i < 10; i++) {
    cow += Math.min(foo[i], bar[i])
  }

  return bull + 'A' + cow + 'B'
}
