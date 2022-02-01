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

  Delete(index) {
    // const location = this.data[index];
    let item = this.data[index];
    this.Shift(index);
    return item;
  }
  Shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length++;
  }
}

const list = new MyArray();
list.Push(800);
list.Push("hello");
list.Push("bye");
list.Push("john");
list.Push("friend");
list.Delete();

console.log(list);

//// Treat string questions as arrays
function ReverseStr(str) {
  if (typeof str !== "string" || str.length == 0) {
    return false;
  }

  const arr = [];

  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join("");
}
console.log(ReverseStr(78));
console.log(ReverseStr("hELLO"));
