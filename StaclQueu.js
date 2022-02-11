class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  Push(value) {
    let newnode = new Node(value);
    if (this.size == 0) {
      this.first = newnode;
      this.last - newnode;
    }

    if (this.size >= 1) {
      let save = this.first;
      this.first = newnode;
      newnode.next = save;
      this.size++;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next - null;
  }
}
