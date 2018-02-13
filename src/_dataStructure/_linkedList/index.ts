function Node(value: any) {
  this.value = value
  this.next = null
}

export function LinkedList() {
  this.head = null
}

LinkedList.prototype.push = function(val: any) {
  const node = new Node(val)

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
