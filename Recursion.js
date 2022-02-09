// The Rules of the Game
// A recursive function needs a base case that will trigger an end to our function calls and prevent a stack overflow
// So the recurse case will eventually stop once the base case has been met
// The function need to have at least to return conditions one for the base case, the other for the recursive case. If not we will get undefined as our return

let counter = 0;

function CallAgain() {
  if (counter > 0) return 'its done';

  counter++;
  return CallAgain();
}

console.log(CallAgain());

// =======================
// =======================
function RecursiveFactorial(num) {
  // first check if the number is less than 0 if it is return -1;

  if (num < 0) return null;
  // then check if the num is equal to 0, if it is return 1;
  if (num == 1) return 1;
  // AS NUM GETS CALLED OVER AND OVER AGAIN RECURSIVELLY, at some point it will decrease to 1 and that will met our base case to come out the loop
  else {
    return num * RecursiveFactorial(num - 1);
    //  num = 4; this is whats going to happen
    // 4 times 3
    // 3 times 2
    // 2 times 1
  }
}
