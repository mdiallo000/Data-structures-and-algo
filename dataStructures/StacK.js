// ** Big O of Stacks
// ** Adding and Removing are both 0(1) since its last IN FIRST out, so we will essentially not traverse of create gaps in between the stack.
// ** Searching and Acessing are both 0(n) meaning the speed will be dtermined by the number of items in our Stack. Its recommended to use a regular array if assess is a priority.

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
    } else {
      let save = this.first;
      this.first = newnode;
      newnode.next = save;
    }
    return this.size++;
  }

  Pop() {
    if (this.size === 0) return null;
    let saveFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    } else {
      this.first = this.first.next;
      this.size--;
    }
    return saveFirst;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next - null;
  }
}

let mystack = new Stack();
mystack.Push(45);
mystack.Push(895);
mystack.Push(5);
mystack.Push('i AM NEW');
mystack.Pop();
mystack.Pop();
mystack.Pop();
mystack.Pop();

console.log(mystack);
