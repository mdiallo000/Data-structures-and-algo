class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  Insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let curr = this.root;
      while (true) {
        if (value < curr.value) {
          if (curr.left === null) {
            current.left = newNode;
          }
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.Insert('NewNODE');
console.log(tree);
