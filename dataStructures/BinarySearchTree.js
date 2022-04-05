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
    }
    if (newNode.value > this.root.value) {
    }
  }
}

let tree = new BinarySearchTree();
tree.root = new Node('I am the root');
tree.root.left = new Node(4);
tree.root.right = new Node(21);
console.log(tree);
