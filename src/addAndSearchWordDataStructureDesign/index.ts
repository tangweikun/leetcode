// HELP:

function TrieNode(cur) {
  return {
    key: cur,
    isWord: false,
    children: {},
  }
}

export const WordDictionary = function() {
  this.root = new TrieNode()
}

WordDictionary.prototype.addWord = function(word) {
  let node = this.root

  for (let i = 0; i < word.length; i++) {
    let cur = word[i]
    if (!node.children[cur]) {
      node.children[cur] = new TrieNode(cur)
    }
    node = node.children[cur]
  }

  node.isWord = true
}

WordDictionary.prototype.search = function(word) {
  let node = this.root

  function dfs(word, node, i) {
    if (i === word.length) {
      return node.isWord
    }

    let cur = word[i]

    if (cur === '.') {
      for (let key in node.children) {
        if (dfs(word, node.children[key], i + 1)) {
          return true
        }
      }
    } else if (node.children[cur]) {
      return dfs(word, node.children[cur], i + 1)
    }

    return false
  }

  return dfs(word, node, 0)
}
