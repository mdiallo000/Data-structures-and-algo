//**F(n) = F(n-1) + F(n-2) (for n > 1)

const fib = (num) => {
  if (num < 2) {
    return num;
  }

  return fib(num - 1) + fib(num - 2);
};

console.log(fib(7));

let num =4
