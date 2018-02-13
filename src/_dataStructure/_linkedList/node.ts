// TODO: Find a better way to deal with new function

export class Node {
  data: any
  next: any
  constructor(value: any) {
    this.data = value
    this.next = null
  }
}
