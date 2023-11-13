/**
 * Operators
 *
 * 연산자
 */

let sample = "99";
console.log(+sample);
console.log(typeof +sample);

sample = true;
console.log(typeof sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

sample = "안유진";
console.log(+sample);

console.log(true || "아이브");
console.log(true && true && "아이브");
console.log(false || "아이브");
console.log(false || true || "아이브");
console.log(false && true);

/**
 * null 연산자
 */

let name;
console.log(name);

name = name ?? "우창욱";
console.log(name);
