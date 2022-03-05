//**F(n) = F(n-1) + F(n-2) (for n > 1)

const fib = (num) => {
  if (num === 0 || num == 1) {
    return 1;
  }

  return fib(num - 1) + fib(num - 2);
};

console.log(fib(5));
