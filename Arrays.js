class MyArray {
  constructor() {
    (this.length = 0), (this.data = {});
  }
  get(index) {
    this.data[index];
  }

  Push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  Pop() {
    return delete this.data[this.length - 1];
  }
}

const list = new MyArray();
list.Push(800);
list.Push("hello");
list.Push("bye");
list.Pop();
console.log(list);
