/**
 * Getter and Setter
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  /**
   * Getter 사용처
   *
   * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
   * 2) private한 값을 반환할 때
   */
  get nameAndYear() {
    return `${this.name}-${this.year}`;
  }

  set name(name) {
    this.name = name;
  }
}

const yuJin = new IdolModel("안유진", 2003);
console.log(yuJin);
// Getter를 사용할 때는 메서드처럼 쓰면 안된다.
// 프로퍼티 값을 가져오는 것 처럼 사용해야 한다.
console.log(yuJin.nameAndYear);

// Getter와 Setter는 프로퍼티의 이름과 같게 두는 경우가 많다.
// Immutable 프로그래밍을 하기 때문에 Setter를 많이 사용하지는 않는다.

yuJin.name = "장원영";
console.log(yuJin.name);

class IdolModel2 {
  #name; // ES2021부터 정식 스펙으로 등록됨. (Stage 4)
  year;

  constructor(name, year) {
    this.#name = name;
    this.year = year;
  }

  get name() {
    return this.#name;
  }

  set name(name) {
    this.#name = name;
  }
}

const yuJin2 = new IdolModel2("안유진", 2003);
console.log(yuJin2);
console.log(yuJin2.name);

yuJin2.name = "유진";

console.log(yuJin2.name);
