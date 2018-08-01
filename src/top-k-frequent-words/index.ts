export const topKFrequent = (words: string[], k: number) => {
  let hash: any = {}

  for (let n of words) {
    hash[n] = ~~hash[n] + 1
  }

  const entries = Object.entries(hash)
  entries.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))

  return entries.slice(0, k).map(arr => arr[0])
}
