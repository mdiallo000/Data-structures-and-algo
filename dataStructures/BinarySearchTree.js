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
        if (value === curr.value) {
          return undefined;
        }
        if (value < curr.value) {
          if (curr.left === null) {
            curr.left = newNode;
            return this;
          }
          curr = curr.left;
        } else {
          if (value > curr.value) {
            if (curr.right === null) {
              curr.right = newNode;
              return this;
            }
            curr = curr.right;
          }
        }
      }
    }
  }
}

let tree = new BinarySearchTree();
tree.Insert(25);
tree.Insert(45);
tree.Insert(74);
tree.Insert(125);
tree.Insert(5);
tree.Insert(3);

console.log(tree);
