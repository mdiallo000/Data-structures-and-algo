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
}

let tree = new BinarySearchTree();
tree.root = new Node('I am the root');
tree.root.left = new Node(4);
tree.root.right = new Node(21);
