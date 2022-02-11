class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // ** This method is always verbatim to the way we push a new node on a linkedList
  Enqueue(value) {
    let newnode = new Node(value);
    if (!this.first) {
      this.first = newnode;
      this.last = newnode;
    } else {
      this.last.next = newnode;
      this.last = newnode;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next - null;
  }
}
