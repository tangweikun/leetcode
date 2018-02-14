import { reverse } from './reverse'
import { getElem } from './getElem'
import { addToHead } from './addToHead'
import { Node } from './node'
import { removeHead } from './removeHead'
import { find } from './find'

export function LinkedList() {
  this.head = null

  this.reverse = () => (this.head = reverse(this.head))

  this.getElem = (pos: number) => getElem(this.head, pos)

  this.addToHead = (element: any) => (this.head = addToHead(this.head, element))

  this.removeHead = (element: any) => (this.head = removeHead(this.head))

  this.find = (element: any) => find(this.head, element)
}

LinkedList.prototype.push = function(data: any) {
  const node = new Node(data)

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

// LinkedList.prototype.insert = function(i: number, data: any) {
//   let j = 1
//   let p = this.head

//   while (p && j < i) {
//     p = p.next
//     j++
//   }

//   if (!p || j > i) {
//     throw new Error('Node Not Exist')
//   }

//   const s = new Node(data)
//   s.next = p.next
//   p.next = s
// }

// LinkedList.prototype.delete = function(i: number, data: any) {
//   let j = 1
//   let p = this.head

//   while (p && j < i) {
//     p = p.next
//     j++
//   }

//   if (!p || j > i) {
//     throw new Error('Node Not Exist')
//   }

//   const q = p.next
//   p.next = q.next
// }
