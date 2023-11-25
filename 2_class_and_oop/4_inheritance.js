/**
 * Inheritance
 *
 * 상속은 객체들 간의 관계를 구축하는 방법이다. 슈퍼클래스, 또는 부모 클래스 등의
 * 기존 클래스로부터 프로퍼티와 메서드를 상속받을 수 있다.
 */
class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance() {
    return "여자 아이돌이 춤을 춥니다.";
  }
}

class MaleIdolModel extends IdolModel {
  sing() {
    return "남자 아이돌이 노래를 부릅니다.";
  }
}

// IdolModel을 상속받았기 때문에 IdolModel의 기본 constructor를 그대로 사용할 수 있다.
const yuJin = new FemaleIdolModel("안유진", 2003);
console.log(yuJin);

const jimin = new MaleIdolModel("지민", 1995);
console.log(jimin);

console.log(yuJin.dance());
console.log(jimin.sing());

console.log(jimin.year);

// console.log(yuJin.sing()) -> X
// console.log(jimin.dance()) -> X

const cf = new IdolModel("코드팩토리", 1992);
console.log(cf);

console.log(cf.name);
// console.log(cf.dance()); -> X

console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof Object);

console.log(yuJin instanceof MaleIdolModel);

console.log("-----------------------------");

console.log(jimin instanceof FemaleIdolModel);
console.log(jimin instanceof IdolModel);
console.log(jimin instanceof Object);

console.log(jimin instanceof MaleIdolModel);

console.log("-----------------------------");

console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof IdolModel);
console.log(cf instanceof Object);

console.log(cf instanceof MaleIdolModel);
