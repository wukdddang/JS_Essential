const yuJin = {
  name: "안유진",
  year: 2003,
};

/**
 * for ... in
 */

for (name in yuJin) {
  console.log(name);
}

const iveMembersArray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log("-----------");

for (let key in iveMembersArray) {
  console.log(key);
}

/**
 * for ... of => iterable한 객체에서 사용할 수 있다.
 */

for (let value of iveMembersArray) {
  console.log(value);
}
