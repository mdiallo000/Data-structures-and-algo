class HashTable {
  constructor(size = 53) {
    this.KeyMap = new Array((size = 53));
  }
  _hash(key) {
    let total = 0;
    let wired_Prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * wired_Prime + value) % this.KeyMap.length;
    }

    return total;
  }

  Set(key, value) {
    let index = this._hash(key);
    if (!this.KeyMap[index]) {
      this.KeyMap[index] = [];
    }
    this.KeyMap[index].push([key, value]);
  }
  Get(key) {
    let index = this._hash(key);
    if (this.KeyMap[index]) {
      if (this.KeyMap[index][i][0] === key) {
        return this.KeyMap[index][i][1];
      }
    }
    return undefined;
  }
  Values() {
    let valueArr = [];
    for (let i = 0; i < this.KeyMap.length; i++) {
      if (this.KeyMap[i]) {
        for (let j = 0; j < this.KeyMap[i].length; j++) {
          if (!valueArr.includes(thisKeyMap[i][j][1])) {
            valueArr.push(thisKeyMap[i][j][1]);
          }
        }
      }
    }
    return valueArr;
  }
  keys() {
    let KeysArr = [];
    for (let i = 0; i < this.KeyMap.length; i++) {
      if (this.KeyMap[i]) {
        for (let j = 0; j < this.KeyMap[i].length; j++) {
          if (!valueArr.includes(thisKeyMap[i][j][0])) {
            KeysArr.push(thisKeyMap[i][j][0]);
          }
        }
      }
    }
    return KeysArr;
  }
}

let newHash = new HashTable();

newHash.Set();
