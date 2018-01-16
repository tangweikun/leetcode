const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

export function findWords(words: string[]) {
  const ans: string[] = []
  for (let i = 0; i < words.length; i++) {
    if (getFlag(words[i])) ans.push(words[i])
  }
  return ans
}

const getFlag = (word: string) => {
  let temp = null

  for (let char of word) {
    if (row1.indexOf(char.toLowerCase()) !== -1) {
      if (temp === null) {
        temp = 'row1'
      } else if (temp !== 'row1') {
        return false
      }
    } else if (row2.indexOf(char.toLowerCase()) !== -1) {
      if (temp === null) {
        temp = 'row2'
      } else if (temp !== 'row2') {
        return false
      }
    } else {
      if (temp === null) {
        temp = 'row3'
      } else if (temp !== 'row3') {
        return false
      }
    }
  }
  return true
}
