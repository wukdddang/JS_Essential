/**
 * Object / 객체
 */

// key: value pair 프로퍼티를 넣을 수 있다.
// Object literal 방식으로 정의한 것

let yuJin = {
  name: "안유진",
  group: "아이브",
  // 함수를 추가할 수 있다. method
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin.dance());

console.log("------------------------------------");

const nameKey = "name";
const nameValue = "안유진";

const groupKey = "group";
const groupValue = "아이브";

const yuJin2 = {
  [nameKey]: nameValue,
  [groupKey]: groupValue,
  dance: function () {
    return `${this.name}이 춤을 춥니다.`;
  },
};

console.log(yuJin2.dance());

// 객체의 값에 접근하면 값을 쓰게할 수도 있다. 프로퍼티 어트리뷰트의 writable을 사용해서 이를 막을 수도 있따.

yuJin2["englishName"] = "An Yu Jin";

console.log(yuJin2);

/**
 * 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티(메서드)는 변경할 수 있따. (프로퍼티 어트리뷰트를 변경하지 않았을 때)
 */

/**
 * 모든 키 값 다 가져오기
 */

console.log(Object.keys(yuJin2));
console.log(Object.values(yuJin2));
