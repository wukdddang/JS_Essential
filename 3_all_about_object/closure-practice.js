function cacheFunction() {
  let number = 99;

  function increment() {
    number++;
    return number;
  }

  function decrement() {
    number--;
    return number;
  }

  return [increment, decrement];
}

const [increment, decrement] = cacheFunction();

console.log(increment()); // 100
console.log(decrement()); // 101
console.log(decrement()); // 101
console.log(increment()); // 101
