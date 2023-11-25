/**
 * DRY
 * D - Don't
 * R - Repeat
 * Y - Yourself
 */

function calculate(number) {
  console.log(((number * 10) / 2) % 3);
}

/**
 * 함수에서 입력받는 값을 parameter라고 한다
 * 실제 입력하는 값은 argument라고 한다.
 */

calculate(5);
calculate(10);

function multiply(x, y) {
  console.log(x * y);
}

multiply(10, 2);

function multiply(x, y = 10) {
  console.log(x * y);
}

multiply(2, 4);
multiply(2);

console.log("-----------------------------");

function multiply(x, y) {
  return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */

const multiply2 = (x, y) => {
  return x * y;
};

console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;

console.log(multiply3(4, 5));

const multiply4 = (x) => x * 2;

console.log(multiply4(2));

const multiply5 = (x) => (y) => (z) => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(4)(5));

function multiply6(x) {
  return function (y) {
    return function (z) {
      return `x: ${x} y: ${y} z: ${z}`;
    };
  };
}

console.log(multiply6(3)(4)(5));

const multiplyTwo = function (x, y) {
  return x * y;
};

console.log(multiplyTwo(4, 5));

const multiplyThree = function (x, y, z) {
  console.log(arguments);
  return x * y * z;
};

console.log("--------------------");
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function (...arguments) {
  console.log(arguments);
  return Object.values(arguments).reduce((acc, cur) => acc * cur, 1);
};

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// 즉시 실행 함수 (Immediately Invoked Function)
(function (x, y) {
  console.log(x * y);
})(4, 5);

console.log(typeof multiply);
// 자바스크립트에서 함수는 Object이다.
console.log(multiply instanceof Object);
