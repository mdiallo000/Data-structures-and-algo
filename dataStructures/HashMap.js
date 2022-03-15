class HashTable {
  constructor(size = 53) {
    this.KeyMap = new Array(size);
  }
  hash (key){
    let total = 0;
    let wired_Prime  =31 
    for (let i =0; i <Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) =96
        total = (total* wired_Prime + value) % this.KeyMap.length 

    }

    return total

  }

  Set (key, value){

    let index = this.hash(key)
     if(!this.KeyMap[index]){
      this.KeyMap[index] = []
     }
     this.KeyMap[index].push([key, value])       
  }
}

let newHash = new HashTable()

newHash.Set()