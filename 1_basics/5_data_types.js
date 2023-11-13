// 1) Number
// 2) String
// 3) Boolean
// 4) undefined
// 5) null
// 6) Symbol

// 7) Object (객체)
/**
 * Function
 * Array
 * Object
 */

const age = 32;
const temperature = -10;
const pi = 3.14;
console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);
console.log("--------------");

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log("--------------");

/**
 * String 타입
 */
const codeFactory = "코드팩토리";
console.log(typeof codeFactory);
console.log("--------------");

const ive = "'아이브' 안유진";
console.log(ive);

const iveWonYoung2 = `아이브
장원영`;

console.log(iveWonYoung2);

console.log("---------------------");

const init = null;
console.log(typeof init);

/**
 * Symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 Primitive 값들과는 다르게 Symbol 함수를 호출해서 사용한다.
 */

const test1 = "1";
const test2 = "1";

console.log(test1 === test2);

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 === symbol2);

/**
 * Object 타입
 *
 * Map
 * key: value
 *
 */
const dictionary = {
  red: "빨간색",
  orange: "주황색",
  yellow: "노란색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary.orange);
console.log(typeof dictionary);

const iveMembersArray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
