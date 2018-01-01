export function countAndSay(n: number): any {
  return n === 1 ? '1' : say(countAndSay(n - 1))
}

export const say = (str: string): string => {
  let count = 1
  let result = ''

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++
    } else {
      result += count + str[i]
      count = 1
    }
  }

  return result
}
