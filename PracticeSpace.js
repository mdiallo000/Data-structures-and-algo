let b = [{g: { x: 1, y: 2 }} , [2, { x: 3, y: 4 }]];

let render = b.map((element) => {
  console.log(element);
});

let pins = {
  title: "jsjdns",
  header: 123,
  zero: "url.com",
};
let seconpin = {
  title: "hello world",
  header: 123,
  zero: "max.com",
};
let box = [seconpin];
let B = b[0]['g'];
console.log(B);

let alt = [...box, pins];
console.log(alt);
let z = alt[0]["title"];
console.log(z);
let str = "My is Mamadou Diallo";
let names = [...str];
console.log(names);
let answer = names.map((letter) => letter + "14");
console.log(answer)

let a= [1,'the other side', 58, {x:89}]

let Y = [];

console.log(Y)
function compare (a, b){
    if (a ===b){
        return true}
    else return false


}

console.log(compare(a,Y))
a.forEach(element => {
   Y.push(element)
});
console.log(Y)

console.log(compare(a,Y))
 Y= a
console.log(compare(a,Y))

console.log(Y)