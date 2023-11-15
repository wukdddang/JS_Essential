/**
 * 객체를 생성하는 방법들
 * 1) object literal을 사용해서 객체 생성
 * 2) class를 인스턴스화해서 객체 생성
 * 3) function을 생성자 함수로 사용해서 객체 생성
 */

const yuJin = {
  name: "안유진",
  year: 2003,
};

console.log(yuJin);

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

console.log(new IdolModel("안유진", 2003));

function IdolFunction(name, year) {
  this.name = name;
  this.year = year;
}

const gaEul = new IdolFunction("가을", 2002);
console.log(gaEul);
