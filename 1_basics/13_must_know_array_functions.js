/**
 * Array Functions
 */

let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

console.log(iveMembers);

// push()
// 새로운 배열의 길이를 반환한다.
console.log(iveMembers.push("코드팩토리"));
console.log(iveMembers);

// pop()
// pop()하는 요소를 반환한다.
console.log(iveMembers.pop());
console.log(iveMembers);

console.log("----------------------------------");

// shift()
// 첫 번째 요소를 반환한다.
console.log(iveMembers.shift());
console.log(iveMembers);

// unshift()
// 새로운 배열의 길이를 반환한다.
console.log(iveMembers.unshift("안유진"));
console.log(iveMembers);

console.log("----------------------------------");

// splice()
// arguments
// 0: 잘라내기를 시작하는 인덱스
// 1: 몇 개나 삭제할 지

// 위 arguments의 조건에 해당하는 배열을 반환한다.
// 원래 배열도 변경된다.
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

// concat()
// arguments에 입력한 값을 포함한 새로운 배열을 만들어서 반환해준다.
// 원본 배열은 변경하지 않는다. (중요)
console.log(iveMembers.concat("코드팩토리"));
console.log(iveMembers);

// slice()
// arguments
// 0: 잘라내기를 시작할 인덱스
// 1: 몇 번 인덱스 전까지 삭제할 지
// 위 arguments의 조건에 해당하는 배열을 반환한다.

// 원본 배열은 변경하지 않는다. (중요)
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
// ...을 사용해서 배열의 값들만 복사할 수 있다.
let iveMembers2 = [...iveMembers];

console.log(iveMembers2);

// 이렇게 하면 2차원 배열이 된다.
let iveMembers3 = [iveMembers];

console.log(iveMembers3);

console.log("----------------------------------");

let iveMembers4 = iveMembers;

console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([...iveMembers] === iveMembers);

// join()
// 배열을 하나의 string으로 만들어준다.
console.log(iveMembers.join());
console.log(typeof iveMembers.join());

// arguments
// 0: join할 string을 넣어줄 수 있따.
console.log(iveMembers.join("/")); //
console.log(iveMembers.join(", "));

// sort()
// 오름차순
// 원본 배열을 바꾼다.
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());
console.log(iveMembers);

let numbers = [1, 9, 7, 5, 3];

console.log(numbers);

// a, b를 비교했을 때 a가 b보다 작게 하려면 0보다 작은 값을 반환
// a, b를 비교했을 때 a가 b보다 크게 하려면 0보다 큰 값을 반환
// 원래 순서대로 그대로 두려면 0을 반환
numbers.sort((a, b) => b - a);
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);

// map()
// 기존 배열을 계산하여 새로운 배열을 반환
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(
  iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  })
);

console.log(iveMembers);

// filter()
// 조건에 맞는 새로운 배열을 반환
numbers = [1, 8, 7, 6, 3];

console.log(numbeconsole.log("----------------------------------");rs.filter((number) => true));
console.log(numbers.filter((number) => false));
console.log(numbers.filter((number) => number % 2 === 0));

// find()
// 가장 첫 번째로 찾은 값 하나만 반환한다.
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
// 가장 첫 번째로 찾은 값의 인덱스 하나만 반환한다.
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
// 배열을 순차적으로 순회하면서 연산한 결과를 반환한다.
// 첫 번째 파라미터의 반환값은 다음 연산의 이전 값으로 사용된다.
// 두 번째 파라미터는 초기값으로 사용된다. 없다면 배열의 첫 번째 요소가 사용된다.

console.log(numbers.reduce((prev, next) => prev + next));
