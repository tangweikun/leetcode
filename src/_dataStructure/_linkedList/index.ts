function Node(value: any) {
  this.value = value
  this.next = null
}

export function LinkedList() {
  this.head = null
}

LinkedList.prototype.push = function(value: any) {
  const node = new Node(value)

  if (!this.head) {
    this.head = {}
    this.head.next = node
  } else {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
}

// Time Complexity: O(n)
LinkedList.prototype.getElem = function(i: number) {
  let j = 1
  let p = this.head.next

  while (p && j < i) {
    p = p.next
    j++
  }

  if (!p || j > i) {
    return 'Node Not Exist'
  }

  return p.value
}

LinkedList.prototype.insert = function(i: number, value: any) {
  let j = 1
  let p = this.head.next

  while (p && j < i) {
    p = p.next
    j++
  }

  if (!p || j > i) {
    throw new Error('Node Not Exist')
  }

  const s = new Node(value)
  s.next = p.next
  p.next = s
}
