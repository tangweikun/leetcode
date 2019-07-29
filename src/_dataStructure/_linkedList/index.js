import { reverse } from './reverse';
import { getElem } from './getElem';
import { addToHead } from './addToHead';
import { Node } from './node';
import { removeHead } from './removeHead';
import { find } from './find';

export function LinkedList() {
  this.head = null;

  this.reverse = () => (this.head = reverse(this.head));

  this.getElem = pos => getElem(this.head, pos);

  this.addToHead = element => (this.head = addToHead(this.head, element));

  this.removeHead = element => (this.head = removeHead(this.head));

  this.find = element => find(this.head, element);
}

LinkedList.prototype.push = function(data) {
  const node = new Node(data);

  if (!this.head) {
    this.head = node;
  } else {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
};

LinkedList.prototype.deleteNode = function(element) {
  let currentNode = this.head;

  while (currentNode) {
    if (currentNode.data === element) {
      currentNode.data = currentNode.next.data;
      currentNode.next = currentNode.next.next;
    }

    currentNode = currentNode.next;
  }
};

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
