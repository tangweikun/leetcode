export function LinkedList() {
  this.head = null
}

LinkedList.prototype.push = function(val: any) {
  const node = { value: val, next: null }

  if (!this.head) {
    this.head = node
  } else {
    let current = this.head
    while (current.next) {
      current = current.next
    }
    current.next = node
  }
}
